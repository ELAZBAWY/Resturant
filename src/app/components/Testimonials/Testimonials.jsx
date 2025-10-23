"use client";
import { Box, Typography } from "@mui/material";
import TestimonialsProvid from "./TestimonialsProvid";
import TestimonialsCard from "./TestimonialsCard";
import { Grid } from "@mui/material";

export default function Testimonials() {
  return (
    <section id="Testimonials">
      <Box
        sx={{
          py: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "40px",
          width: "100%",
          background: "#032f43",
        }}
      >
        <Box
          sx={{
            width: {
              sm: "1500px",
              sx: "100%",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              width: {
                xs: "300px",
                md: "700px",
              },
              marginTop: "40px",
            }}
          >
            Client Testimonials
          </Typography>
          <Typography
            variant="h2"
            color="text.tertiary"
            sx={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            What Client Say About Us ?
          </Typography>
          {/* START CARDS SECTION */}
          <Grid container spacing={4} justifyContent="center" mt={5}>
            {TestimonialsProvid.map((card) => (
              <Grid item key={card.id} size={{ xs: 9, md: 4 }}>
                <TestimonialsCard
                  key={card.id}
                  rating={card.rating}
                  disc={card.disc}
                  image={card.image}
                  name={card.name}
                  joptitle={card.joptitle}
                />
              </Grid>
            ))}
          </Grid>
          {/* END CARDS SECTION */}
        </Box>
      </Box>
    </section>
  );
}
