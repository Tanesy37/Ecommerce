import type { Product } from "../../app/models/product";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

type Props = {
  product: Product[];
};

export default function ProductList({ product }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}
