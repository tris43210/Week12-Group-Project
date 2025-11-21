// New artists enter profile details
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/connect";
import { redirect, RedirectType } from "next/navigation";

export default async function CreateProfilePage() {
  const { isAuthenticated, redirectToSignIn, userId } = await auth();

  if (!isAuthenticated) {
    return redirectToSignIn();
  }

  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    const sendToDatabase = await db.query(
      "INSERT INTO artist (name, bio, avatar,clerk_id) VALUES ($1, $2, $3, $4)",
      [data.name, data.bio, data.avatar, userId]
    );
    redirect("artist/myprofile");
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-full max-w-xs">
        <form
          action={handleSubmit}
          className="bg-folio-slate shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <h1 className="thick-gradient-underline">Tell Us About Yourself</h1>

            <label
              htmlFor="user-name"
              className="block text-folio-cyan text-sm font-bold mb-2"
            >
              Username:{" "}
            </label>
            <input
              type="text"
              id="user-name"
              placeholder="Enter a username"
              name="name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-folio-cyan leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="user-bio"
              className="block text-folio-cyan text-sm font-bold mb-2"
            >
              Profile Bio:{" "}
            </label>
            <input
              type="text"
              id="user-bio"
              placeholder="Enter a profile bio"
              name="bio"
              required
              className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="user-avatar"
              className="block text-folio-cyan text-sm font-bold mb-2"
            >
              Avatar Image:{" "}
            </label>
            <input
              type="text"
              id="user-avatar"
              placeholder="Enter a image URL for your Avatar"
              name="avatar"
              required
              className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-folio-blue hover:bg-folio-cyan text-folio-slate font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
