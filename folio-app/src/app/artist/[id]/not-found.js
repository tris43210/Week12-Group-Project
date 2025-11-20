import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Woopsie!</h1>
      <p>Sorry, This Person Does Not Exist!</p>
      <Link href="/">Back to Home?</Link>
    </div>
  );
}
