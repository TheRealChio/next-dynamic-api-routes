import { getAllProducts } from "@/services/productServices";

const allProducts = getAllProducts();

export default function handler(request, response) {
  response.status(200).json(allProducts);
}
