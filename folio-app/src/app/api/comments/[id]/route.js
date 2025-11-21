import { db } from "@/utils/connect";

export async function GET(request, { params }) {
  const { id } = await params;
  const comments = await db.query(
    "SELECT comments.id AS commentId, comments.comment, comments.artworkid, comments.created_at, artist.name AS artistname FROM comments JOIN artist ON comments.artistid = artist.id WHERE artworkid=$1 ORDER BY comments.created_at DESC",
    [parseInt(id)]
  );
  return Response.json(comments.rows);
}
