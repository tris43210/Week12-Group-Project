// New artists enter profile details
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/connect";
import { redirect, RedirectType } from "next/navigation"


export default async function CreateProfilePage() {
  const {isAuthenticated, redirectToSignIn, userId } = await auth() 

  if (!isAuthenticated) {
    return redirectToSignIn(); 
  }

  async function handleSubmit(formData) {
    "use server"
    const data = Object.fromEntries(formData);
    const sendToDatabase = await db.query('INSERT INTO artist (name, bio, avatar,clerk_id) VALUES ($1, $2, $3, $4)', [data.name, data.bio, data.avatar, userId]); 
    redirect('myprofile')
  }

  return (
    <>
      <form action={handleSubmit}>
        <label htmlFor="user-name">Username: </label>
        <input type="text" id="user-name" placeholder="Enter a username" name="name" required></input>

        <label htmlFor="user-bio">Profile Bio: </label>
        <input type="text" id="user-bio" placeholder="Enter a profile bio" name="bio" required></input>

        <label htmlFor="user-avatar">Avatar Image: </label>
        <input type="text" id="user-avatar" placeholder="Enter a image URL for your Avatar" name="avatar" required></input>

        <button type="submit">Submit Information</button>
      </form>
      <div>The form you type your Name, Bio, Avatar link</div>
    </>
  );
}
