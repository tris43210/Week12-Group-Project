import { Limelight } from "next/font/google";
import Link from "next/link";
import { getArtistInfo } from "@/utils/getArtistInfo";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
});

export default async function NavBar() {
  const artist = await getArtistInfo();
  return (
    <ClerkProvider>
      <nav className="flex items-center justify-between p-4 gap-4 h-20 bg-[#2D3333] shadow-lg bg-opacity-65">
        <div className="flex items-center gap-5">
          <h1 className={`${limelight.className} text-4xl`}>FOLIO</h1>
          <div>
            <Link className="hover:text-[#12E6E0]" href={"/"}>
              Home
            </Link>{" "}
            |
            {artist && (
              <Link className="hover:text-[#e612e6]" href={"/artist/myprofile"}>
                {" "}
                My Profile
              </Link>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {artist?.name}
          <SignedOut>
            <SignInButton>
              <button className="bg-[#2C3C3B] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-3 cursor-pointer hover:bg-[#12E6E0]">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton forceRedirectUrl="/artist/create-profile">
              <button className="bg-[#2C3C3B] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-3 cursor-pointer hover:bg-[#e612e6]">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </ClerkProvider>
  );
}
