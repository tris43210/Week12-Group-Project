import { ReactionsIcon } from "@/components/Icons/ReactionsIcon";
import Image from "next/image";

export default function DisplayArtwork({ artwork }) {
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
        <div className="mx-4">
          <ReactionsIcon />
          Reactions 0
        </div>
      </div>
      <div className="m-4">{artwork.artist}</div>
      <div className="m-4">{artwork.name}</div>
    </div>
  );
}
