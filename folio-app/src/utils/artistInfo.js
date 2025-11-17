import { auth } from "@clerk/nextjs/server";
import { db } from "./connect";

export async function getUserInfo() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return null;
    }
    const res = await db.query(`SELECT * FROM artists WHERE clerk_id = $1`, [
      userId,
    ]);

    if (res.rows.length === 0) {
      return null;
    }

    const artistInfo = res.rows[0];
    return artistInfo;
  } catch (error) {
    console.error("Error fetching artist info:", error);
    return null;
  }
}
