import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";

export default async function MyArtworkCarousel(props) {
  return (
    <>
      <div className="w-full bg-folio-slate rounded-xl p-0.5">
        <Carousel className="m-[50px]">
          <CarouselContent>
            {props.artwork.map(function (item) {
              return (
                <CarouselItem key={item.id} className="basis-1/3">
                  <div className="aspect-square w-full h-[500px] overflow-hidden">
                    <Link href={`/artwork/${item.id}`}>
                      <Image
                        src={item.img}
                        alt=""
                        width={600}
                        height={500}
                        className=" h-full object-cover rounded-xl"
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
