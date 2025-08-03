# VisionPad - Collaborative Visual Canvas

[Live URL](https://vision-pad-nine.vercel.app/)

VisionPad is a real-time collaborative whiteboard tool built with Next.js, Liveblocks, Convex, and Clerk. It allows multiple users to draw, create shapes, and leave notes collaboratively.

---

## 🚀 Features

- ✅ Real-time collaboration using [Liveblocks](https://liveblocks.io/)
- ✅ Authentication with [Clerk](https://clerk.dev/)
- ✅ Persistent canvas data with [Convex](https://convex.dev/)
- ✅ Auth middleware protection using Clerk
- ✅ Supports drawing & shapes like:
  - **Rectangle**
  - **Ellipse**
  - **Freehand Drawing**
  - **Sticky Notes**
- ✅ User presence indicators and avatars
- ✅ Undo/redo functionality
- ✅ Cloud-deployed on [Vercel](https://vercel.com/)

---

## 🧩 Shape Types

- 🟦 **Rectangle**  
  Create and resize rectangular blocks on the canvas.

- 🟢 **Ellipse**  
  Draw perfect circles and ellipses easily.

- 📝 **Notes (Sticky Notes)**  
  Add and edit virtual sticky notes to collaborate and annotate the canvas.

---

## 📦 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Auth**: Clerk
- **Realtime Collaboration**: Liveblocks
- **Backend/Storage**: Convex

---

## 🛠️ Local Development

```bash
git clone https://github.com/your-username/vision-pad.git
cd vision-pad

# Install dependencies
npm install

# Create a `.env.local` file and add the following:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url

LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key

# Run locally
npm run dev
