// Individual artwork page
import Link from "next/Link";

export default async function ArtworkPage({ params }) {
  const { id } = await params;

  // db.query to get artist ID from the artwork table

  return (
    <div>
      This is individual artwork page. Database query from searchParams.
      <Link href={`/artist/${artwork.artistId}`}>Artists Name</Link>
    </div>
  );
}
