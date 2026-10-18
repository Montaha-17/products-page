
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Fragment } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function ProductsPagination({
  page,
  totalPages,
  onPageChange,
}: ProductsPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).filter(
    (number) =>
      number === 1 ||
      number === totalPages ||
      Math.abs(number - page) <= 1
  );

  return (
    <Pagination className="mt-8 font-brand">
      <PaginationContent className="gap-2">

        {/* Previous */}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Previous page"
            aria-disabled={page === 1}
            onClick={(event) => {
              event.preventDefault();
              if (page > 1) onPageChange(page - 1);
            }}
            className={
              page === 1
                ? "pointer-events-none opacity-40"
                : "cursor-pointer"
            }
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>

       
{/* Page Numbers */}
{pages.map((number, index) => (
  <Fragment key={number}>
    {index > 0 && number - pages[index - 1] > 1 && (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    )}

    <PaginationItem>
      <PaginationLink
        href="#"
        isActive={page === number}
        onClick={(event) => {
          event.preventDefault();
          onPageChange(number);
        }}
        className={
          page === number
            ? "h-10 w-10 cursor-pointer rounded-lg border-brand-green bg-brand-green text-white hover:bg-brand-green hover:text-white"
            : "h-10 w-10 cursor-pointer rounded-lg"
        }
      >
        {number}
      </PaginationLink>
    </PaginationItem>
  </Fragment>
))}


        {/* Next */}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Next page"
            aria-disabled={page === totalPages}
            onClick={(event) => {
              event.preventDefault();
              if (page < totalPages) onPageChange(page + 1);
            }}
            className={
              page === totalPages
                ? "pointer-events-none opacity-40"
                : "cursor-pointer"
            }
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}
