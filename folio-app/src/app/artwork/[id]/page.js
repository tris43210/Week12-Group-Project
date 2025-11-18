// Individual artwork page
import AddComment from "@/components/AddComment";
import Link from "next/link";
import { db } from "@/utils/connect";

export default async function ArtworkPage({ params }) {
  const { id } = await params;

  // db.query to get artist ID from the artwork table
  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    console.log(data);
    const sendToDb = await db.query(
      "INSERT INTO comments (artworkid,comment) VALUES ($1, $2)",
      [id, data.comment]
    );
  }

  return (
    <div>
      This is individual artwork page. Database query from searchParams.
      {/* <Link href={`/artist/${artwork.artistId}`}>Artists Name</Link> */}
      <AddComment handleSubmit={handleSubmit} />
    </div>
  );
}
