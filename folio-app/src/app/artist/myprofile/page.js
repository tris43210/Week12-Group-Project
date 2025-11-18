// artist/myprofile page

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import EditProfileModal from "@/components/EditProfileModal";

export default async function MyProfilePage() {
  const { userId } = await auth();

  const getID = await db.query("SELECT * FROM artist WHERE clerk_id = $1", [
    userId,
  ]);
  const gotUser = getID.rows[0];

  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    const submitArt = await db.query(
      "INSERT INTO artwork (name, img, artist_id) VALUES ($1, $2, $3)",
      [data.name, data.img, gotUser.id]
    );
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
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger>Submit Art...</DialogTrigger>
        <DialogContent className="bg-folio-slate shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <DialogHeader>
            <DialogTitle>Submit your art here!</DialogTitle>
            <DialogDescription>Better be your best work!</DialogDescription>
          </DialogHeader>
          <form
            action={handleSubmit}
            className="bg-folio-slate shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <label
              htmlFor="name"
              className="block text-folio-cyan text-sm font-bold mb-2"
            >
              Artwork Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Artwork Name"
              required
              className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label
              htmlFor="img"
              className="block text-folio-cyan text-sm font-bold mb-2"
            >
              Image URL
            </label>
            <textarea
              type="text"
              id="img"
              name="img"
              placeholder="Image URL"
              required
              className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />

            <DialogFooter>
              <button type="submit">Submit</button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <EditProfileModal
        artist={gotUser}
        handleUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}
