"use client";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuCard({ title, disc, image }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Card sx={{ maxWidth: 320, background: "#032c3fff", marginTop: "50px" }}>
        <CardActionArea>
          <Box sx={{ position: "relative", width: "100%", height: 180 }}>
            <Image
              src={image}
              alt={title}
              fill
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography variant="body2" color="text.tertiary">
              {disc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Tooltip
            title="View All"
            placement="bottom"
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#fdc00e",
                  color: "#032c3f",
                  fontSize: "14px",
                  borderRadius: "8px",
                  boxShadow: 2,
                },
              },
              arrow: {
                sx: {
                  color: "#fdc00e",
                },
              },
            }}
            arrow
          >
            <Button
              sx={{
                width: "100%",
                "&:hover": {
                  background: "#fdc00e",
                  color: "#fff",
                },
              }}
              size="large"
              variant="outlined"
              color="primary"
            >
              View All
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </motion.div>
  );
}
