import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import FeatureEndow from "../components/FeatureEndow";
import Discovery from "../components/Discovery";
import Partner from "../components/Partner";
import CarouselBanner from "../components/CarouselBanner";
import Carousels from "../components/Carousels";
const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselBanner />
      <Box maxW="7xl" mx="auto" pb="12">
        <Heading>Chào mừng đến với GoGo!</Heading>
        <Text>
          Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên
          GoGo
        </Text>
        <Text>Đăng nhập hoặc Đăng ký để trải nghiệm !</Text>
      </Box>
      <FeatureEndow />
      <Carousels />
      <Articles />
      <Partner />
      <Feature />
      <Discovery />
      <Footer />
    </div>
  );
};

export default Home;
