"use client";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StarIcon from "@mui/icons-material/Star";
import SpaIcon from "@mui/icons-material/Spa";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function AboutUs() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#032f43",
        color: "#fdc00e",
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Text */}
        <Grid size={{ xs: 12, md: 6 }}>
          <IconButton
            component={Link}
            href="/"
            sx={{
              color: "#fdc00e",
              "&:hover": { color: "#ffeb99" },
              mx: 2,
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 28 }} />
          </IconButton>
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
          >
            Welcome to Shrimp Zone!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.8,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Shrimp Zone is a special seafood restaurant that offers a unique
            dining experience. Our dishes are made with the freshest
            ingredients, cooked with care, and presented in a modern style that
            satisfies every taste.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, textAlign: { xs: "center", md: "left" } }}
          >
            Whether you’re a shrimp lover, prefer healthy meals, or just looking
            for a fun gathering with friends and family — we’re here to make it
            unforgettable.
          </Typography>
        </Grid>

        {/* Right Image */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 250, md: 300 },
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/cover2.jpg"
              alt="Shrimp Zone Restaurant"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Middle Icons Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ mt: 6, textAlign: "center" }}
      >
        <Grid item size={{ xs: 12, md: 3 }}>
          <SpaIcon sx={{ fontSize: 50, color: "#fdc00e" }} />
          <Typography variant="h6" fontWeight={600}>
            Healthy Options
          </Typography>
          <Typography variant="body2">
            We offer light, fresh meals that suit your lifestyle.
          </Typography>
        </Grid>

        <Grid item size={{ xs: 12, md: 3 }}>
          <StarIcon sx={{ fontSize: 50, color: "#fdc00e" }} />
          <Typography variant="h6" fontWeight={600}>
            Guaranteed Quality
          </Typography>
          <Typography variant="body2">
            We use only top-quality ingredients with the highest hygiene
            standards.
          </Typography>
        </Grid>

        <Grid item size={{ xs: 12, md: 3 }}>
          <EmojiEmotionsIcon sx={{ fontSize: 50, color: "#fdc00e" }} />
          <Typography variant="h6" fontWeight={600}>
            Comfortable Atmosphere
          </Typography>
          <Typography variant="body2">
            Designed to make every visit relaxing and enjoyable.
          </Typography>
        </Grid>

        <Grid item size={{ xs: 12, md: 3 }}>
          <RestaurantIcon sx={{ fontSize: 50, color: "#fdc00e" }} />
          <Typography variant="h6" fontWeight={600}>
            Variety of Dishes
          </Typography>
          <Typography variant="body2">
            Enjoy a wide selection of authentic seafood flavors.
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ mt: 8, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Our Vision:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          To be the first destination for seafood lovers, combining authentic
          taste with elegance and exceptional service.
        </Typography>

        <Typography variant="h6" fontWeight={700} gutterBottom>
          Our Mission:
        </Typography>
        <Typography variant="body1">
          To provide seafood dishes of the highest quality, focusing on
          innovation, variety, and customer satisfaction.
        </Typography>
      </Box>
    </Box>
  );
}
