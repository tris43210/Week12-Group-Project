// Individual artwork page
import CommentAdd from "@/components/CommentAdd";
import { db } from "@/utils/connect";
import { getArtistInfo } from "@/utils/getArtistInfo";
import CommentDisplay from "@/components/CommentDisplay";
import ArtWorkDisplay from "@/components/ArtworkDisplay";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function ArtworkPage({ params }) {
  const { id } = await params;
  const artistInfo = await getArtistInfo();

  // get art
  const artwork = (
    await db.query(
      `SELECT 
     artwork.id,
     artwork.name,
     artwork.img,
     artwork.artist_id,
     artist.name AS artist,
   COUNT(reactions.id) as like_count
  FROM artwork
  JOIN artist ON artwork.artist_id = artist.id
  LEFT JOIN reactions ON artwork.id = reactions.artworkid
  WHERE artwork.id = $1
  GROUP BY artwork.id, artwork.name, artwork.img, artwork.artist_id, artist.name`,
      [id]
    )
  ).rows[0];

  // error for dynamic param not in db
  if (!artwork) {
    notFound();
  }

  // Submit a comment
  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    const sendToDb = await db.query(
      "INSERT INTO comments (artworkid,comment, artistid) VALUES ($1, $2, $3)",
      [id, data.comment, artistInfo.id]
    );
  }

  // delete comment
  async function handleDelete(commentId) {
    "use server";
    const result = await db.query(
      "DELETE FROM comments WHERE id = $1 RETURNING *",
      [commentId]
    );
    revalidatePath(`/artwork/${artwork.id}`);
  }

  // add a Reaction
  async function handleReaction() {
    "use server";
    const reactionToDb = await db.query(
      "INSERT INTO reactions (artistid, artworkid) VALUES ($1, $2)",
      [artistInfo.id, artwork.id]
    );
  }

  return (
    <div>
      <ArtWorkDisplay artwork={artwork} handleReaction={handleReaction} />
      <CommentDisplay artworkId={id} />
      <CommentAdd handleSubmit={handleSubmit} />
    </div>
  );
}
