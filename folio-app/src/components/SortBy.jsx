import Link from "next/link";

export default async function SortBy({ searchParams }) {
  const filters = searchParams;
  const sortParam = filters?.sort;

  let order = sortParam === "desc" ? "DESC" : "ASC";
}

return (
  <div>
    <Link href="/?sort=asc">Oldest</Link>
    <Link href="/?sort=desc">Newest</Link>
  </div>
);
