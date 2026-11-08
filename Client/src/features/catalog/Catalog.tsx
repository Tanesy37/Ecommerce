import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
  product: Product[];
};

export default function Catalog({ product }: Props) {
  return (
    <>
      <ProductList product={product} />
    </>
  );
}
