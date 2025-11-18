import { db } from "@/utils/connect";

export async function GET(request, { params }) {
  const { id } = await params;
  const comments = await db.query("SELECT * FROM comments WHERE artworkid=$1", [
    parseInt(id),
  ]);
  return Response.json(comments.rows);
}
