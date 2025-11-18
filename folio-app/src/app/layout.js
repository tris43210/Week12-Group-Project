import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { Limelight } from "next/font/google";

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Folio App",
  description:
    "A great platform to show off your art WORLD WIDE!. Share your art and show support for others here!",
  openGraph: {
    title: "Folio App",
    description:
      "A great platform to show off your art WORLD WIDE!. Share your art and show support for others here!",
    type: "website",
    url: "PLACEHOLDER URL....",
    images: ["https://pngimg.com/uploads/letter_f/letter_f_PNG55.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased`}>
          <div>
            <NavBar />
            <div className="fixed top-2 right-15 text-center text-white">
              <SignedOut>
                <SignInButton />
                <SignUpButton forceRedirectUrl="/artist/create-profile">
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-3 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
