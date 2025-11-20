// Individual artwork page
import AddComment from "@/components/AddComment";
import { db } from "@/utils/connect";
import { getArtistInfo } from "@/utils/getArtistInfo";
import CommentDisplay from "@/components/CommentDisplay";
import DisplayArtwork from "@/components/DisplayArtwork";
import { notFound } from "next/navigation";

export default async function ArtworkPage({ params }) {
  const { id } = await params;
  const artistInfo = await getArtistInfo();

  // Submit a comment
  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    const sendToDb = await db.query(
      "INSERT INTO comments (artworkid,comment, artistid) VALUES ($1, $2, $3)",
      [id, data.comment, artistInfo.id]
    );
  }

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
      <DisplayArtwork artwork={artwork} handleReaction={handleReaction} />
      <CommentDisplay artworkId={id} />
      <AddComment handleSubmit={handleSubmit} />
    </div>
  );
}
