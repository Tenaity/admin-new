import React, { useState } from "react";
import { Text, Box, Flex, Image, Heading } from "@chakra-ui/react";

const Carousels = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    mt: "-22px",
    px: "5",
    py: "2.5",
    bg: "white",
    shadow: "xl",
    color: "black",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "50%",
    userSelect: "none",
    zIndex: "10",
    _hover: {
      opacity: 0.8,
      color: "orange",
    },
  };
  const slides = [
    {
      img: "/images/luxstay/luxstayHaNoi.png",
    },
    {
      img: "/images/luxstay/luxstayDaLat.png",
    },
    {
      img: "/images/luxstay/luxstayDaNang.png",
    },
    {
      img: "/images/luxstay/luxstaySaiGon.png",
    },
    {
      img: "/images/luxstay/luxstayHoiAn.png",
    },
    {
      img: "/images/luxstay/luxstayQuangNing.png",
    },
    {
      img: "/images/luxstay/luxstayNhaTrang.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 270}px`,
  };

  return (
    <Box w="7xl" mx="auto" pt="10">
      <Heading> Địa điểm nổi bật</Heading>
      <Text pt="2" pb="3">
        Cùng GoGo bắt đầu chuyến hành trình chinh phục thế giới của bạn
      </Text>
      <Flex w="full" pos="relative">
        <Flex w="full" overflow="hidden" pos="relative" borderRadius="5">
          <Flex h="300px" w="250px" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box
                key={`slide-${sid}`}
                boxSize="full"
                shadow="md"
                flex="none"
                mr="10"
                borderRadius="5"
                overflow="hidden"
              >
                <Image src={slide.img} boxSize="full" backgroundSize="cover" />
              </Box>
            ))}
          </Flex>
        </Flex>
        <Text
          as="button"
          {...arrowStyles}
          left="-6"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          &#10094;
        </Text>
        <Text
          as="button"
          {...arrowStyles}
          right="-6"
          onClick={nextSlide}
          disabled={currentSlide === slidesCount - 4}
        >
          &#10095;
        </Text>
      </Flex>
    </Box>
  );
};

export default Carousels;
