// Individual artist page
import { db } from "@/utils/connect";

export default async function ArtistPage({ params }) {
  const { id } = await params;
  const data = await db.query(
    `SELECT *
      FROM artist WHERE id=$1`,
    [id]
  );
  const artInfo = data.rows[0];
  return (
    <div>
      <p>This is the Page for each artists profile.</p>
      <h2>{artInfo.name}</h2>
      <h2>{artInfo.bio}</h2>
    </div>
  );
}
