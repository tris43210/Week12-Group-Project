// Edit Profile Modal

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EditProfileModal({ artist, handleUpdateProfile }) {
  return (
    <Dialog>
      <DialogTrigger className="ml-5 mt-3 bg-folio-cyan text-folio-slate rounded-xl p-3 font-bold hover:bg-folio-blue">
        Edit Profile
      </DialogTrigger>
      <DialogContent className="bg-folio-slate shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make it memorable!</DialogDescription>
        </DialogHeader>
        <form
          action={handleUpdateProfile}
          className="bg-folio-slate shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label
            htmlFor="name"
            className="block text-folio-cyan text-sm font-bold mb-2"
          >
            Profile Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={artist.name}
            required
            className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label
            htmlFor="bio"
            className="block text-folio-cyan text-sm font-bold mb-2"
          >
            Bio
          </label>
          <textarea
            type="textarea"
            id="bio"
            name="bio"
            defaultValue={artist.bio}
            required
            className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label
            htmlFor="avatar"
            className="block text-folio-cyan text-sm font-bold mb-2"
          >
            Avatar
          </label>
          <textarea
            type="text"
            id="avatar"
            name="avatar"
            defaultValue={artist.avatar}
            required
            className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <DialogFooter>
            <button type="submit">Confirm Change?</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
