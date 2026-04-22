## 03-routing-rendering

A **Next.js App Router** playground project focused on **routing & rendering patterns**.

It contains examples of:

- Route groups (separate “marketing” vs “content” sections)
- Dynamic routes (e.g. `[slug]`)
- Optional catch-all routes (e.g. `[[...filter]]`)
- Parallel routes / slots (e.g. `@archive`, `@latest`, `@modal`)
- Route interception (e.g. `(.)image`)
- Error and 404 handling (`error.js`, `not-found.js`)
- API route (`app/api/route.js`)

### Tech stack

- **Next.js** `14.1.0`
- **React** `18`

### Prerequisites

- **Node.js** (LTS recommended)
- **npm**

### Setup & run

From the `03-routing-rendering` folder:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Useful scripts

- **`npm run dev`**: start dev server
- **`npm run build`**: production build
- **`npm run start`**: run production server (after build)
- **`npm run lint`**: lint the project

### Where to look (key routes)

- **Marketing section (route group)**: `app/(marketing)/page.js`
- **Content section layout**: `app/(content)/layout.js`
- **News list**: `app/(content)/news/page.js`
- **News detail (dynamic)**: `app/(content)/news/[slug]/page.js`
- **Image route + interception + modal slot**:
  - `app/(content)/news/[slug]/image/page.js`
  - `app/(content)/news/[slug]/@modal/(.)image/page.js`
  - `app/(content)/news/[slug]/@modal/default.js`
- **Archive with parallel routes + optional catch-all**:
  - `app/(content)/archive/@archive/[[...filter]]/page.js`
  - `app/(content)/archive/@latest/default.js`
- **Error + Not Found handling**:
  - `app/(content)/error.js`, `app/(content)/not-found.js`
  - `app/(content)/archive/error.js`
  - `app/(content)/news/not-found.js`
- **API route**: `app/api/route.js`
