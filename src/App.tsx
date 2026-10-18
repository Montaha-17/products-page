
import { ProductsPage } from "@/pages/ProductsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { Navbar } from "@/components/layout/Navbar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <>
      <Navbar
        search={search}
        onSearchChange={handleSearchChange}
      />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/products" replace />}
        />

        <Route
          path="/products"
          element={
            <ProductsPage
              search={search}
              page={page}
              onPageChange={setPage}
            />
          }
        />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
