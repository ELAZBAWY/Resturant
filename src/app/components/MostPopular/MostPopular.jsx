"use client";
import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import MostPopularPrvid from "./MostPopularProvid";
import MostPopularCard from "./MostPopularCard";
import CartDrawer from "../carts/Drawer";

export default function MostPopular() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  const handleSnackbar = () => {
    console.log("Snackbar triggered!");
  };

  return (
    <section id="MostPopular">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fdc00e",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Most Popular
        </Typography>

        <Typography
          variant="body1"
          sx={{
            width: { xs: "300px", md: "700px" },
            mt: 4,
            textAlign: "center",
            color: "#ccc",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          saepe cupiditate unde quaerat, dolorum porro quasi.
        </Typography>

        {/* 🟩 CARDS SECTION */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          {MostPopularPrvid.map((card) => (
            <Grid size={{ xs: 11, sm: 6, md: 4, lg: 3, xl: 2 }} key={card.id}>
              <MostPopularCard
                {...card}
                onSelect={() => handleCardClick(card)}
              />
            </Grid>
          ))}
        </Grid>

        {/* 🟩 DRAWER SECTION */}
        <CartDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          product={selectedProduct}
          handleClick={handleSnackbar}
        />
      </Box>
    </section>
  );
}
