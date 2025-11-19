import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "@/utils/connect";
import { getArtistInfo } from "@/utils/getArtistInfo";
import Image from "next/image";
import Link from "next/link";

export default async function MyArtworkCarousel(props) {
  console.log(props);
  return (
    <>
      <div className="w-full">
        <Carousel className="m-[50px]">
          <CarouselContent>
            {props.artwork.map(function (item) {
              return (
                <CarouselItem key={item.id} className="basis-1/3">
                  <div className="aspect-square w-full h-[500px] overflow-hidden">
                    <Link href={`http://localhost:3000/artwork/${item.id}`}>
                      <Image
                        src={item.img}
                        alt=""
                        width={600}
                        height={500}
                        className=" h-full object-cover"
                      />
                    </Link>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
