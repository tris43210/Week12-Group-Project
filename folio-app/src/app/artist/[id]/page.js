// Individual artist page
import MyArtworkCarousel from "@/components/MyArtworkCarousel";
import { db } from "@/utils/connect";
import { getArtistInfo } from "@/utils/getArtistInfo";

export default async function ArtistPage({ params }) {
  const { id } = await params;
  const data = await db.query(
    `SELECT *
      FROM artist WHERE id=$1`,
    [id]
  );

  const Artworkdata = await db.query(
    "SELECT * FROM artwork WHERE artist_id=$1",
    [id]
  );
  const response = Artworkdata.rows;

  const artInfo = data.rows[0];
  return (
    <div className="mx-4 2xl:mx-[100px] mt-4">
      <div className="bg-folio-slate w-fit rounded-xl p-2 mb-4 m-auto">
        <h2 className="text-xl font-bold">{artInfo.name}</h2>
        <h2>{artInfo.bio}</h2>
      </div>
      <MyArtworkCarousel artwork={response} />
    </div>
  );
}
