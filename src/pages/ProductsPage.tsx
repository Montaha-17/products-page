
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/common/ProductCard";
import { useDebounce } from "@/hooks/useDebounce";
import { Hero } from "@/components/common/Hero";
import { CategoryFilter } from "@/components/common/CategoryFilter";
import { ProductsPagination } from "@/components/common/ProductsPagination";

type ProductsPageProps = {
  search: string;
  page: number;
  onPageChange: (page: number) => void;
};

export function ProductsPage({
  search,
  page,
  onPageChange,
}: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const debouncedSearch = useDebounce(search, 500);
  const limit = 10;

  const { data, isPending, isError } = useProducts(
    debouncedSearch,
    page,
    limit
  );

  const totalPages = Math.ceil((data?.total ?? 0) / limit);

  return (
    <main className="px-3 pb-10 lg:px-6">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section className="mt-4 rounded-[12px] bg-surface p-4 lg:p-6">

        {/* Category Filter */}
        <div className="mb-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Products Content */}
        {isPending ? (
          <p className="py-10 text-center font-brand">
            Loading products...
          </p>
        ) : isError ? (
          <p className="py-10 text-center font-brand">
            Error fetching products
          </p>
        ) : data.products.length === 0 ? (
          <p className="py-10 text-center font-brand">
            No products found.
          </p>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {data.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {/* Pagination */}
           <ProductsPagination
  page={page}
  totalPages={totalPages}
  onPageChange={onPageChange}
/>
          </>
        )}
      </section>
    </main>
  );
}
