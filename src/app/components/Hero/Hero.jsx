"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();

  return (
    <section id="Hero">
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/cover2.jpg"
          alt="مطعم TastyBite"
          fill
          priority={false}
          loading="lazy"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(65%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(10, 34, 46, 0.6)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: {
              md: 0,
            },
            width: "100%",
            zIndex: 3,
          }}
        >
          <Navbar />
        </Box>
        {/* Content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Typography
                variant="h1"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                  maxWidth: "1200px",
                  lineHeight: 1.3,
                  px: 2,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                }}
              >
                An Elegant Restaurant That Will Surprise You With Its Cuisine
              </Typography>
              <Typography
                variant="body1"
                color="text.tertiary"
                sx={{
                  maxWidth: "1200px",
                  lineHeight: 1.8,
                  marginTop: "20px",
                  px: 2,
                  fontSize: { xs: ".8rem", sm: "2rem", md: "1rem" },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quia odio libero nesciunt similique et sapiente culpa non totam
                optio delectus itaque, a praesentium animi pariatur id esse
                perferendis rerum!
              </Typography>
            </motion.div>

            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,

                fontWeight: 600,
                px: 4,
                py: 1.2,
                "&:hover": { backgroundColor: "#ffcf4a" },
                display: {
                  xs: "  none",
                  md: "block",
                },
              }}
              onClick={() => router.push("/ContactUs")}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
