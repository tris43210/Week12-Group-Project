import Image from "next/image";
import { db } from "@/utils/connect";
import Link from "next/link";

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export default async function Home({ searchParams }) {
  const filters = await searchParams;
  const sortParam = filters?.sort;
  let order = sortParam === "desc" ? "DESC" : "ASC";

  const artwork = (
    await db.query(`SELECT 
       artwork.id,
      artwork.img
    FROM artwork
    ORDER BY artwork.created_at ${order}`)
  ).rows;

  const validArtwork = artwork.filter((art) => art.img && isValidUrl(art.img));

  return (
    <div className="w-full min-h-screen ">
      <div className="flex justify-end gap-2 mr-5 mt-3">
        <Link
          className="bg-[#2D3333] text-white rounded-xl p-3 hover:bg-folio-blue"
          href="/?sort=asc"
        >
          Oldest{" "}
        </Link>
        <Link
          className="bg-[#2D3333] text-white rounded-xl p-3 hover:bg-folio-blue"
          href="/?sort=desc"
        >
          Newest
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="lg:w-5/6 p-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {validArtwork.map((art) => (
              <Link
                href={`/artwork/${art.id}`}
                key={art.id}
                className="mb-4 break-inside-avoid block"
              >
                <Image
                  src={art.img}
                  alt=""
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
