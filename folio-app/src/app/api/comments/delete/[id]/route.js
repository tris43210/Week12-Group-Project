import { db } from "@/utils/connect";

export async function DELETE(request, { params }) {
  const { id } = await params;

  try {
    const result = await db.query(
      "DELETE FROM comments WHERE id = $1 RETURNING *",
      [parseInt(id)]
    );

    if (result.rows.length === 0) {
      return Response.json({ error: "Comment not found" }, { status: 404 });
    }

    return Response.json({ success: true, deleted: result.rows[0] });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return Response.json(
      { error: "Failed to delete comment" },
      { status: 500 }
    );
  }
}
