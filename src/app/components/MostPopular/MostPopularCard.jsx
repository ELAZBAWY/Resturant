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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { useSnackbar } from "@/app/Context/ContextSnack";
import { useOrders } from "@/app/Context/ContextCart";

export default function MostPopularCard({
  title,
  disc,
  image,
  price,
  id,
  onSelect,
}) {
  const { showSnackbar } = useSnackbar();
  const { addOrder } = useOrders();

  const handleClick = () => {
    showSnackbar("The request has been added to the basket.");
  };

  return (
    <Card
      sx={{
        background: "#032c3fff",
        mt: 6,
        color: "#fff",
        borderRadius: 3,
      }}
    >
      <CardActionArea onClick={onSelect}>
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
          <Typography color="#fdc00e" gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#ddd" }}>
            {disc}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#04384d",
          px: 2,
          py: 1,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <AttachMoneyIcon sx={{ color: "#fdc00e", fontSize: 22 }} />
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
            {price}
          </Typography>
        </Box>

        <AddShoppingCartIcon
          sx={{
            color: "#fdc00e",
            fontSize: 28,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { color: "#fff", transform: "scale(1.1)" },
          }}
        />
      </Box>

      <CardActions>
        <Tooltip
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
          title="Order Now"
          placement="bottom"
          arrow
        >
          <Button
            sx={{
              width: "100%",
              "&:hover": { background: "#fdc00e", color: "#fff" },
            }}
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => {
              handleClick();
              addOrder({ id, title, disc, image, price });
              onSelect?.(); // ✅ يفتح Drawer
            }}
          >
            Order Now
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
