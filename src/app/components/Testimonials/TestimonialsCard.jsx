"use client";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

import Rating from "@mui/material/Rating";

export default function TestimonialsCard({
  rating,
  disc,
  image,
  name,
  joptitle,
}) {
  return (
    <Box>
      <Card sx={{ maxWidth: 320, background: "#032c3fff", marginTop: "50px" }}>
        <CardActionArea>
          <CardContent>
            <Rating name="read-only" value={rating} readOnly />

            <Typography variant="body2" color="text.tertiary">
              {disc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        <ChangeHistoryIcon
          sx={{ fontSize: 50, color: "#ff9800", rotate: "180deg" }}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Avatar alt="Travis Howard" src={image} />
          <Box
            sx={{
              marginLeft: "10px",
            }}
          >
            <Typography variant="body2" color="text.primary">
              {name}
            </Typography>
            <Typography variant="body2" color="text.tertiary">
              {joptitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
