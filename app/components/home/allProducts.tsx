"use client";

import { Box, Grid, Typography } from "@mui/material";
import BuyButton from "../buy-button";
import ProductCard from "../product-card";

export default function AllProducts({ products }: { products: any[] }) {
  return (
    <Box
      px={2}
      py={4}
      sx={{
        maxWidth: "lg",
        width: "100%",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ fontFamily: "monospace", mb: 3 }}
      >
        Alla produkter
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product}>
              {product.quantity > 0 ? (
                <BuyButton product={product} />
              ) : (
                <Typography variant="body2" color="textSecondary">
                  Slut i lager
                </Typography>
              )}
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
