import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex justify-center  bg-folio-slate w-fit rounded-xl p-2 mb-4">
      <div>
        <h1>Woopsie!</h1>
        <p>Sorry, Could Not Find Requested Post</p>
        <Link href="/">Back to Home?</Link>
      </div>
    </div>
  );
}
