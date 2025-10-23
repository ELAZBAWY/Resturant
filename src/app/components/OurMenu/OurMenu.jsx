"use client";
import { Box, Typography } from "@mui/material";
import OurMenuPrvid from "./OurMenuProvid";
import MenuCard from "./MenuCard";
import { Grid } from "@mui/material";

export default function OurMenu() {
  return (
    <section id="OurMenu">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            color="text.primary"
            sx={{
              color: "#fdc00e",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Our Menu
          </Typography>
          <Typography
            variant="body1"
            color="text.tertiary"
            sx={{
              width: {
                xs: "300px",
                md: "700px",
              },
              marginTop: "40px",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ut
            ducimus dolor maxime voluptates repellendus? Deserunt saepe
            cupiditate unde quaerat, dolorum porro quasi, fuga itaque accusamus
            eius magnam corporis suscipit.
          </Typography>
        </Box>
        {/* START CARDS SECTION */}
        <Grid container spacing={4} justifyContent="center" mt={5}>
          {OurMenuPrvid.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
              <MenuCard
                key={card.id}
                title={card.title}
                disc={card.disc}
                image={card.image}
              />
            </Grid>
          ))}
        </Grid>
        {/* END CARDS SECTION */}
      </Box>
    </section>
  );
}
