
import { useParams, Link } from "react-router-dom";
import { useProduct } from "@/hooks/useProduct";
import { Hero } from "@/components/common/Hero";
import { Card, CardContent } from "@/components/ui/card";

export function ProductDetailsPage() {
  const { id } = useParams();
  const productId = Number(id);

  const { data, isPending, isError } = useProduct(productId);

  return (
    <main className="px-3 pb-10 lg:px-6">
      {/* Hero Section */}
      <Hero />

      {/* Product Details Section */}
      <section className="mt-4 rounded-[12px] bg-surface p-4 lg:p-8">
        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 font-brand text-sm text-brand-text hover:text-brand-green"
        >
          ← Back to Products
        </Link>

        {isPending ? (
          <p className="py-12 text-center font-brand">
            Loading product...
          </p>
        ) : isError ? (
          <p className="py-12 text-center font-brand text-red-600">
            Error fetching product.
          </p>
        ) : !data ? (
          <p className="py-12 text-center font-brand">
            Product not found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <Card className="overflow-hidden rounded-[12px] border-0 bg-product-bg p-0 shadow-none">
              <CardContent className="flex min-h-[350px] items-center justify-center p-8 lg:min-h-[480px]">
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="max-h-[400px] w-full object-contain"
                />
              </CardContent>
            </Card>

            {/* Product Information */}
            <div className="flex flex-col justify-center gap-5 font-brand">
              <span className="w-fit rounded-full bg-product-bg px-4 py-2 text-xs uppercase tracking-wide text-brand-muted">
                {data.category}
              </span>

              <h1 className="text-3xl font-bold leading-tight text-brand-text lg:text-4xl">
                {data.title}
              </h1>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-brand-muted">
                  {data.rating} / 5
                </span>
              </div>

              <p className="text-3xl font-semibold text-brand-green">
                ${data.price}
              </p>

              <div className="h-px w-full bg-border" />

              <div>
                <h2 className="mb-3 text-lg font-semibold text-brand-text">
                  Product Description
                </h2>

                <p className="text-sm leading-7 text-brand-muted">
                  {data.description}
                </p>
              </div>

              <Link
                to="/products"
                className="mt-4 inline-flex w-fit items-center justify-center rounded-[12px] bg-brand-green px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-green/90"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
