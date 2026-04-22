## 02-nextjs-essentials

A small **Next.js App Router** project from the course that showcases core Next.js essentials (routing, layouts, server components, data fetching, and image handling) using a simple **Meals** demo.

### Tech stack

- **Next.js** (App Router)
- **React**
- **SQLite** via `better-sqlite3` (local file database: `meals.db`)

### Prerequisites

- **Node.js** (LTS recommended)
- **npm**

### Getting started

Install dependencies:

```bash
npm install
```

Initialize the local database (creates `meals.db` and seeds dummy meals):

```bash
node initdb.js
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

### Resetting the database (re-seed)

If you run `initdb.js` multiple times, inserts can fail because `slug` is unique. To reset:

```bash
rm -f meals.db
node initdb.js
```

On Windows PowerShell:

```powershell
Remove-Item .\meals.db
node .\initdb.js
```

### Useful scripts

- **`npm run dev`**: run locally in development
- **`npm run build`**: production build
- **`npm run start`**: start production server (after build)

### Project notes

- **Database file**: `meals.db` lives in this folder (`02-nextjs-essentials/`).
- **Seed script**: `initdb.js` creates the `meals` table and inserts dummy rows.
- **Data access**: see `lib/meals.js` for how the app reads data.
