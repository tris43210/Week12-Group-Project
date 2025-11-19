// artist/myprofile page

import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import EditProfileModal from "@/components/EditProfileModal";
import AddArtworkModal from "@/components/AddArtworkModal";
import MyArtworkCarousel from "@/components/MyArtworkCarousel";
import { getArtistInfo } from "@/utils/getArtistInfo";
import { revalidatePath } from "next/cache";

export default async function MyProfilePage() {
  const { userId } = await auth();
  const getID = await db.query("SELECT * FROM artist WHERE clerk_id = $1", [
    userId,
  ]);
  const gotUser = getID.rows[0];

  const artistInfo = await getArtistInfo();
  const data = await db.query("SELECT * FROM artwork WHERE artist_id=$1", [
    artistInfo.id,
  ]);
  const response = data.rows;
  console.log(response);

  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    await db.query(
      "INSERT INTO artwork (name, img, artist_id) VALUES ($1, $2, $3)",
      [data.name, data.img, gotUser.id]
    );
    revalidatePath("/artist/myprofile");
  }

  async function handleUpdateProfile(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    await db.query(
      `UPDATE artist 
        SET name = $1,
        bio = $2,
        avatar = $3
        WHERE id = $4`,
      [data.name, data.bio, data.avatar, gotUser.id]
    );
    revalidatePath("/artist/myprofile");
  }
  return (
    <div className="mx-4 2xl:mx-[100px] mt-4">
      <h1 className="text-xl font-bold">{`Welcome ${gotUser.name}`}</h1>
      <h2>{gotUser.bio}</h2>
      <AddArtworkModal submitArt={handleSubmit} />
      <EditProfileModal
        artist={gotUser}
        handleUpdateProfile={handleUpdateProfile}
      />
      <MyArtworkCarousel artwork={response} />
    </div>
  );
}
