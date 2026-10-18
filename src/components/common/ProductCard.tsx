
import type { Product } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-[12px] border-0 bg-product-bg p-0 shadow-none">

      {/* Product Image */}
      <div className="flex h-[260px] items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <CardContent className="flex flex-col gap-2 px-5 pb-5">

        <h3 className="line-clamp-2 font-brand text-base font-semibold text-brand-text">
          {product.title}
        </h3>

        <div className="flex items-center justify-between gap-3">
          <span className="font-brand text-lg font-bold text-brand-text">
            ${product.price}
          </span>

          <span className="font-brand text-sm text-brand-muted">
            ⭐ {product.rating}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-2 inline-flex w-fit items-center font-brand text-sm font-medium text-brand-green underline underline-offset-4 hover:opacity-70"
        >
          View Details
        </Link>

      </CardContent>
    </Card>
  );
}
