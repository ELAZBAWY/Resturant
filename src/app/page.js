import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeroSection from "@/app/components/Hero/Hero";
import OurMenu from "./components/OurMenu/OurMenu";
import MostPopular from "./components/MostPopular/MostPopular";
import ReservationSection from "./components/Reseration/Reseration";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ContactPage from "./ContactUs/page";
export default function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container maxWidth="xlg"></Container>

      <HeroSection />
      <OurMenu />
      <MostPopular />
      <ReservationSection />
      <Testimonials />
      <Footer />
    </Box>
  );
}
