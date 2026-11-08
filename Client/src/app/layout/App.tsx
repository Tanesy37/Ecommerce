import { useEffect, useState } from "react";
import "../../App.css";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((Response) => Response.json())
      .then((result) => setProducts(result))
      .catch((err) => console.log(`failed to fecth producst ${err}`));
  }, []);

  function AddProducts() {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1, // Dynamic numeric ID
        name: "Product " + (prev.length + 1),
        description: "This is the description for Product " + (prev.length + 1),
        price: (prev.length + 1) * 100,
        pictureUrl: `hhtps://picsum.photo/200`, // Placeholder image path
        type: "Shoes", // Default category type
        brand: "Nike",
        quantityInStock: 10 + prev.length, // Dynamic stock number
      },
    ]);
  }
  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", justifyContent: "center", marginY: 5 , gap: 5 }}
      >
        <Typography variant="h4">Re-store</Typography>
        <Button variant="contained" onClick={AddProducts}>
          Add product
        </Button>
      </Box>

      <Catalog product={products} />
    </Container>
  );
}

export default App;
