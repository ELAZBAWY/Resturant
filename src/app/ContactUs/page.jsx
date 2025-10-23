"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0a222e",
          minHeight: "100vh",
          color: "#ffcf4a",
          py: 6,
          px: { xs: 3, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mb: "10px"
          }}
        >
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
            align="center"
            sx={{ fontWeight: "bold", width: "90%" }}
          >
            Contact Us
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left side - Form */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Full Name"
                variant="filled"
                fullWidth
                InputProps={{
                  style: { backgroundColor: "#fddc8b" },
                }}
                InputLabelProps={{
                  style: { color: "#6a0011" },
                }}
              />
              <TextField
                label="Email Address"
                variant="filled"
                fullWidth
                InputProps={{
                  style: { backgroundColor: "#fddc8b" },
                }}
                InputLabelProps={{
                  style: { color: "#6a0011" },
                }}
              />
              <TextField
                label="Phone Number"
                variant="filled"
                fullWidth
                InputProps={{
                  style: { backgroundColor: "#fddc8b" },
                }}
                InputLabelProps={{
                  style: { color: "#6a0011" },
                }}
              />
              <TextField
                label="Message"
                variant="filled"
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  style: { backgroundColor: "#fddc8b" },
                }}
                InputLabelProps={{
                  style: { color: "#6a0011" },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffcf4a",
                  color: "#6a0011",
                  fontWeight: "bold",
                  width: "fit-content",
                  px: 3,
                  "&:hover": { backgroundColor: "#ffcf4a" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          {/* Right side - Contact info */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h6" sx={{ color: "#fddc8b" }}>
                Get in touch
              </Typography>
              <Typography>Email: support@yourrestaurant.com</Typography>
              <Typography>Phone: +20 10 080260757</Typography>
              <Typography>
                Address: 108 Saqr Quraish Buildings, next to Al-Farouk Mosque,
                Sheraton Al Matar, Cairo
              </Typography>

              <Typography sx={{ mt: 2 }}>Follow us</Typography>
              <Box>
                <IconButton href="#" sx={{ color: "#fddc8b" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton href="#" sx={{ color: "#fddc8b" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton href="#" sx={{ color: "#fddc8b" }}>
                  <TikTokIcon />
                </IconButton>
              </Box>

              {/* Google Maps Embed */}
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  mt: 2,
                  height: 350,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.490012345!2d31.369!3d30.108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458177df12d9c7d%3A0xb17a5d4d6fcbf78f!2s108%20Saqr%20Quraish%20Buildings!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
