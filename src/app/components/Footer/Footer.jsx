import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  Phone,
  Email,
} from "@mui/icons-material";

export default function RestaurantFooter() {
  return (
    <Box
      color="text.tertiary"
      sx={{
        backgroundColor: "#0a222e",
        mt: 8,
        pt: 6,
        pb: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              color="text.primary"
              variant="h5"
              fontWeight="bold"
              gutterBottom
            >
              TastyBite 🍴
            </Typography>
            <Typography color="text.tertiary" variant="body2">
              We offer you the best fresh food and authentic flavors with
              exceptional service that will keep you coming back for more.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Twitter />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              color="text.primary"
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Quick links
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ccc", cursor: "pointer", mb: 1 }}
            >
              Home
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ccc", cursor: "pointer", mb: 1 }}
            >
              Menu
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ccc", cursor: "pointer", mb: 1 }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#ccc", cursor: "pointer", mb: 1 }}
              color="text.primary"
            >
              Get in touch
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              color="text.primary"
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Get in touch
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Room sx={{ color: "#ffb300", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                Tanta, Al-Nadi Street, in front of City Center Mall
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ color: "#ffb300", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                +20 155 123 4567
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "#ffb300", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                info@tastybite.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "#444" }} />

        <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
          © {new Date().getFullYear()} TastyBite. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
