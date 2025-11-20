## Setup instructions

This is a Next.JS application.

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run npm install
3. Create a .env file in the root directory and add the following environment variables:

- DB_CONN - your Supabase connection string (transaction pooler)
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY - register a project in Clerk, Configure > API keys >
- CLERK_SECRET_KEY - also from Clerk dashboard
- CLERK_SIGN_UP_FORCE_REDIRECT_URL - add the following \*/artist/create-profile\_

4. Create the database schema by running the SQL commands in schema.sql in your database (eg. by running the commands in Supabase Query Editor)
5. Run npm run dev to start the development server
6. Open http://localhost:3000 with your browser to see the site

## Friday sprint

[x] Registered project on Clerk
[x] Communication channels - Trello, Figma, Discord
[x] Created repo and all git cloned
[x] Created basic user flow with Pages
[x] Created Supabase database tables

## Monday sprint

[x] Created forms to create profile and upload artwork
[x] Designed homepage masonry gallery

## Tuesday sprint

[x] Created form to create comments
[x] Client-side polling for refreshing comments - used [Next API routes](https://nextjs.org/docs/app/api-reference/file-conventions/route)
[x] Used UI components from shadcn [Dialog modals](https://ui.shadcn.com/docs/components/dialog) [Carousel](https://ui.shadcn.com/docs/components/carousel) [Scroll area](https://ui.shadcn.com/docs/components/scroll-area)

## Wednesday sprint

[x] Completed /artist/id dynamic route
[x] Secured all routes with Clerk proxy.js
[x] Added client-validation for image URL (RegEx) and server-side validation when trying to render **Image** components
[x] Added header and footer

## Thursday sprint

[x] Added searchParams for sorting home page ascending / descending
[x] Uploaded to Vercel
[x] Added 'reactions' functionality for users to 'like' artwork
[x] Added error pages

## :dart: Stretch goals not acheived

[ ] Users can create a link to an avatar URL, we haven't used this feature as yet

## With thanks

- All artwork gratefully used copyright-free from [Unsplash](https://unsplash.com/)
- Favicon from [Freepik](https://www.freepik.com/icon/frame_3137493)
