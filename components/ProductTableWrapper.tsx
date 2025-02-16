import { GetProducts } from "@/lib/data";
import ProductTable from "./ProductTable";

const ProductTableWrapper = async () => {
  const products = (await GetProducts()) || []; // Default ke array kosong jika undefined

  return <ProductTable products={products} />;
};

export default ProductTableWrapper;
