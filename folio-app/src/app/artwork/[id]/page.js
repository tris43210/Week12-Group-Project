// Individual artwork page
import AddComment from "@/components/AddComment";
import Link from "next/link";
import { db } from "@/utils/connect";
import { getArtistInfo } from "@/utils/getArtistInfo";
import CommentDisplay from "@/components/CommentDisplay";
import DisplayArtwork from "@/components/DisplayArtwork";

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
     artist.name AS artist
  FROM artwork
  JOIN artist ON artwork.artist_id = artist.id
  WHERE artwork.id = $1`,
      [id]
    )
  ).rows[0];

  return (
    <div>
      <DisplayArtwork artwork={artwork} />
      <CommentDisplay artworkId={id} />
      <AddComment handleSubmit={handleSubmit} />
    </div>
  );
}
