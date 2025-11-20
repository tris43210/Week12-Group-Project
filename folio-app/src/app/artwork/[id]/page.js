// Individual artwork page
import AddComment from "@/components/AddComment";
import Link from "next/link";
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
   COUNT(likes.id) as like_count
  FROM artwork
  JOIN artist ON artwork.artist_id = artist.id
  LEFT JOIN likes ON artwork.id = likes.artworkid
  WHERE artwork.id = $1
  GROUP BY artwork.id, artwork.name, artwork.img, artwork.artist_id, artist.name`,
      [id]
    )
  ).rows[0];

  if (!artwork) {
    notFound();
  }

  return (
    <div>
      <DisplayArtwork artwork={artwork} />
      <CommentDisplay artworkId={id} />
      <AddComment handleSubmit={handleSubmit} />
    </div>
  );
}
