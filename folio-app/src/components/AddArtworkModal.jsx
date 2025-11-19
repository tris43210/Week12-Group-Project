//Add Artwork Modal

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddArtworkModal({ submitArt }) {
  return (
    <Dialog>
      <DialogTrigger>Submit Art...</DialogTrigger>
      <DialogContent className="bg-folio-slate shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <DialogHeader>
          <DialogTitle>Submit your art here!</DialogTitle>
          <DialogDescription>Better be your best work!</DialogDescription>
        </DialogHeader>
        <form
          action={submitArt}
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
          <input
            type="url"
            id="img"
            name="img"
            pattern="^(https?://.*(unsplash\.com|imgur\.com|cloudinary\.com|amazonaws\.com|googleusercontent\.com).*)|(https?://.*\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?)$"
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
  );
}
