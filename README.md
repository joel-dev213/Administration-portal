# FootwearAdmin — Administration Portal

An admin dashboard for a footwear store, built with **React**, **Vite**, **Tailwind CSS v4**, and **React Router**. It lets staff view the product inventory, search products, add new products, and edit or delete existing ones.

## Features

- **Dashboard** — Browse all products in a responsive grid with images, prices, stock levels, and availability status.
- **Search** — Filter products by name as you type.
- **Add Product** — Fill out a form to add a new product (submitted to a local mock API).
- **Edit Product** — Update a product's name and price inline.
- **Delete Product** — Remove products from the inventory.
- **Restock / Mark Sold Out** — Toggle a product's availability status.
- **Shared Layout** — A Header banner and Navigation bar appear on every page.

## Project Structure

```
src/
  main.jsx            # Entry point; wraps App in BrowserRouter + StrictMode
  App.jsx             # Routes: / (dashboard), /products, /add-product
  index.css           # Global Tailwind import and base styles
  App.css             # Shared component styles
  Components/
    Header.jsx        # Welcome banner shown on every page
    Navigation.jsx    # Top nav bar with brand and page links
    ProductPage.jsx   # Product list page with search + header
    ProductList.jsx   # Grid layout of product cards
    ProductCard.jsx   # Single product card with edit/delete/toggle
    Productform.jsx   # Add-product form
  data/
    sampleProducts.js # Hard-coded sample products used as default data
  assets/             # Images, logos, icons
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router 7
- json-server (mock API for the product form)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 3. Start the mock API (for adding products)

In a separate terminal:

```bash
npm run server
```

This runs `json-server` on `http://localhost:3001`. The product form posts new products to `/products`.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run server` | Start the JSON mock API on port 3001 |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Routes

| Path | Page |
| --- | --- |
| `/` | Dashboard with header + product list |
| `/products` | Product list page |
| `/add-product` | Add new product form |
| *(anything else)* | Redirects to `/` |

## Notes

- Default sample data lives in `src/data/sampleProducts.js` and is used when the mock API isn't running.
- All styling uses Tailwind utility classes.
- Components are organized under `src/Components/` for easy reuse across pages.
