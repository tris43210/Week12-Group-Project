import Link from "next/link";

export default async function SortBy({ searchParams }) {}

return (
  <div>
    <Link href="/?sort=asc">Oldest</Link>
    <Link href="/?sort=desc">Newest</Link>
  </div>
);
