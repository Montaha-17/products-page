# Products Page

A responsive e-commerce products page built with React, TypeScript, and Tailwind CSS, featuring product browsing, search, pagination, and product details.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui
- TanStack React Query
- React Router
- DummyJSON API

## Features

- Responsive product listing inspired by the provided Figma design
- Product cards displaying images, titles, prices, and ratings
- Product search with debounce
- Server-side pagination with numbered page navigation
- Individual product details pages
- Loading, error, and empty states
- API data fetching and caching with TanStack React Query
- Category filter UI

## API Endpoints

This project uses the [DummyJSON API](https://dummyjson.com/docs/products).

- `GET /products` — Fetch products
- `GET /products/search?q=...` — Search products
- `GET /products/:id` — Fetch product details
- `limit` and `skip` — Control pagination

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
├── api/           # API requests
├── assets/        # Fonts, icons, and images
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Shared utilities
├── pages/         # Products and product details pages
├── types/         # TypeScript types
├── App.tsx
└── main.tsx
```

## Notes

Product data is fetched dynamically from DummyJSON rather than hardcoded.

Category filter buttons are currently implemented as UI controls; API-based category filtering is not yet connected.