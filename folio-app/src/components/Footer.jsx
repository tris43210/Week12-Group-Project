import Link from "next/link";
import { InstagramIcon } from "@/components/Icons/InstagramIcon";
import { XIcon } from "@/components/Icons/XIcon";
import { FacebookIcon } from "@/components/Icons/FacebookIcon";

export default function Footer() {
  return (
    <div className="flex w-full fixed bottom-0 justify-center p-4 gap-6  bg-[#2D3333] text-white shadow-lg bg-opacity-65">
      <Link href="https://www.instagram.com/" className="block w-1/50 h-1/50">
        <InstagramIcon />
      </Link>

      <Link href="https://x.com/">
        <XIcon />
      </Link>

      <Link href="https://www.facebook.com/">
        <FacebookIcon />
      </Link>
    </div>
  );
}
