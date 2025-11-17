import { Limelight } from "next/font/google";
import Link from "next/link";

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
});

export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center p-4 gap-4 h-20 bg-[#2D3333] shadow-lg bg-opacity-65">
        <h1 className={`${limelight.className} text-4xl`}>FOLIO</h1>
        <div>
          <Link href={"/"}>Home | </Link>
          <Link href={"/artist/myprofile"}>My Profile</Link>
        </div>
      </nav>
    </div>
  );
}
