"use client";
import { ReactionsIcon } from "@/components/Icons/ReactionsIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DisplayArtwork({ artwork, handleReaction }) {
  console.log(artwork);
  const [reactions, setReactions] = useState(parseInt(artwork.like_count) || 0);

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="flex items-center m-4">
        <div className="w-2/3 h-2/3 rounded-xl">
          <Image
            src={artwork.img}
            alt=""
            width={300}
            height={400}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className="mx-10 flex">
          <div
            onClick={() => {
              setReactions((previous) => previous + 1);
              handleReaction();
            }}
          >
            <ReactionsIcon />
          </div>
          <div className="mx-2">{reactions}</div>
        </div>
      </div>
      <div className="m-4 hover:text-folio-cyan">
        <Link href={`/artist/${artwork.artist_id}`}>{artwork.artist}</Link>
      </div>
      <div>{artwork.name}</div>
    </div>
  );
}
