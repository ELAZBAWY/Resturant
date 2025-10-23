"use client";
import { useState, useEffect } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import CartDrawer from "@/app/components/carts/Drawer";
import { Box, Tabs, Tab, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [openCart, setopenCart] = useState(false);
  const handelOpen = () => setopenCart(true);
  const handelClose = () => setopenCart(false);

  const [open, setOpen] = useState(false);
 
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <Box
      sx={{
    flexGrow: 1,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: scrolled ? "rgba(10, 34, 46, 0.9)" : "transparent",
    backdropFilter: scrolled ? "blur(6px)" : "none",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 1,
    transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <Grid container spacing={1}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          size={12}
        >
          <Box>
            <Tabs
              sx={{
                "& .MuiTab-root": { mx: 2, color: "#fdc00e" },
                "& .MuiTab-root:focus": {
                  color: "#ffeb99",
                },
                display: {
                  xs: "none",
                  md: "block",
                },
                zIndex: "500",
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#f5b400",
                  height: "4px",
                  borderRadius: "2px",
                  color: "#fdc00e",
                },
              }}
              value={value}
              onChange={handleChange}
              centered
            >
              {/* ✅ Tabs with Next.js Links */}

              <Tab
                component="a"
                href="#Hero"
                sx={{ color: "white" }}
                label="Home"
              />
              <Tab
                component="a"
                href="#OurMenu"
                sx={{ color: "white" }}
                label="Our Menu"
              />
              <Tab
                component="a"
                href="#MostPopular"
                sx={{ color: "white" }}
                label="MostPopular"
              />

              <Tab
                component="a"
                href="#Reservation"
                sx={{ color: "white" }}
                label="Reservation"
              />
              <Tab
                component="a"
                href="#Testimonials"
                sx={{ color: "white" }}
                label="Testimonials"
              />
              <Tab
                component={Link}
                href="/AboutUs"
                sx={{ color: "white" }}
                label="About Us"
              />
            </Tabs>

            {/* ✅ Drawer للموبايل */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box>
                  <Button onClick={() => router.push("/ContactUs")}>
                    <CallIcon
                      sx={{
                        color: "#fdc00e",
                        display: {
                          xs: " block",
                          md: "none",
                        },
                      }}
                    />
                  </Button>
                </Box>

                <Box>
                  <Button onClick={handelOpen}>
                    <LocalGroceryStoreIcon sx={{ color: "#fdc00e" }} />
                    <CartDrawer open={openCart} onClose={handelClose} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <IconButton onClick={handelOpen}>
              <LocalGroceryStoreIcon
                sx={{
                  color: "#fdc00e",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              />
            </IconButton>
            <CartDrawer open={openCart} onClose={handelClose} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
