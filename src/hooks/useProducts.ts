import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/productsApi";

export function useProducts(search: string, page: number, limit: number)  {
  return useQuery({
    queryKey: ["products", search, page, limit],
    queryFn: () => fetchProducts(search, page, limit),
  });
}