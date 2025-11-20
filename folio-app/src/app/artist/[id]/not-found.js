import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex justify-center mt-16">
      <div className=" bg-folio-slate w-fit rounded-2xl p-2 mb-4">
        <div className="flex flex-col items-center">
          <h1>Wuuuuh?</h1>
          <p>Sorry, This Person Does Not Exist!</p>
          <Link href="/">Back to Home?</Link>
        </div>
      </div>
    </div>
  );
}
