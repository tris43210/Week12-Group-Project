import Image from "next/image";
import { db } from "@/utils/connect";
import Link from "next/link";

export default async function Home() {
  const artwork = (
    await db.query(`SELECT 
       artwork.id,
      artwork.img
    FROM artwork
  `)
  ).rows;

  return (
    <div className="w-full min-h-screen bg-amber-200 sm:bg-black">
      <div className="flex justify-center">
        <div className="lg:w-5/6 p-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {artwork.map((art) => (
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
