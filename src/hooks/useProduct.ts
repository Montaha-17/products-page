import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/productsApi";

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
}