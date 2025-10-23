"use client";
import Drawer from "@mui/material/Drawer";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { useOrders } from "@/app/Context/ContextCart";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartDrawer({ open, onClose }) {
  const { orders, removeOrder } = useOrders();

  if (!orders || orders.length === 0)
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(10, 34, 46, 0.9)",
            color: "#fdc00e",
            backdropFilter: "blur(8px)",
            height: "100vh",
          },
        }}
      >
        <Box sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6">Your cart is empty 🛒</Typography>
        </Box>
      </Drawer>
    );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(10, 34, 46, 0.9)",
          color: "#fdc00e",
          width: 330,
          backdropFilter: "blur(8px)",
          height: "100vh",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          {/* ✅ عرض المنتجات */}
          <Box sx={{ flexGrow: 1, overflowY: "auto", pb: 2 }}>
            {orders.map((item, index) => (
              <CartItem key={index} product={item} removeOrder={removeOrder} />
            ))}
          </Box>

          <Card
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: "#032c3f",
              color: "#fff",
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              paddingBottom: "100px",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Order Summary
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <Typography>Subtotal</Typography>
              <Typography>
                {orders
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)}{" "}
                EGP
              </Typography>
            </Box>

            <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.3)" }} />

            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {orders
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)}{" "}
                EGP
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Drawer>
  );
}

function CartItem({ product, removeOrder }) {
  const { updateQuantity } = useOrders();
  const count = product.quantity;
  const total = product.price * count;

  return (
    <Card
      sx={{
        background: "#04384d",
        borderRadius: 3,
        boxShadow: 3,
        mb: 2,
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: 160 }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover", borderRadius: "4px" }}
        />
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ color: "#fff" }}>
          {product.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
          {product.disc}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" sx={{ color: "#fdc00e" }}>
            Price: ${product.price}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#fdc00e" }}>
            Total: ${total.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#fdc00e",
          color: "#032c3f",
          borderRadius: "15px",
          mx: 2,
          mb: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <IconButton
          onClick={() => removeOrder(product.id)}
          sx={{
            color: "#032c3f",
            boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
          }}
          size="small"
        >
          <DeleteIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => updateQuantity(product.id, Math.max(count - 1, 1))}
            sx={{
              backgroundColor: "#032c3f",
              color: "#e5b700",
              "&:hover": { backgroundColor: "#f4f4f4" },
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
            }}
            size="small"
          >
            <RemoveIcon fontSize="small" />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mx: 1,
              minWidth: "30px",
              textAlign: "center",
            }}
          >
            {count}
          </Typography>

          <IconButton
            onClick={() => updateQuantity(product.id, count + 1)}
            sx={{
              backgroundColor: "#032c3f",
              color: "#e5b700",
              "&:hover": { backgroundColor: "#f4f4f4" },
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
            }}
            size="small"
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
