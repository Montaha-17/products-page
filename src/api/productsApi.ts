import type { Product, ProductsResponse } from "@/types/product";

export async function fetchProducts(
    search: string,
    page: number,
    limit: number
): Promise<ProductsResponse> {
    const skip = (page - 1) * limit;
    const url = search
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
}

export async function fetchProductById(id: number): Promise<Product> {
const response = await fetch(`https://dummyjson.com/products/${id}`);
if (!response.ok) {
    throw new Error("Failed to fetch product");
}
const data = await response.json();
return data;
}