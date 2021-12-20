import React, { useState, useEffect } from "react";
import { Box, Flex, Image, HStack } from "@chakra-ui/react";

const CarouselBanner = () => {
  const slides = [
    {
      img: "/images/banner1.png",
    },
    {
      img: "/images/banner2.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });

  return (
    <Box py="10">
      <Flex w="7xl" h="280px" overflow="hidden" mx="auto" borderRadius="10">
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex h="400px" w="full" {...carouselStyle} borderRadius="5">
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" flex="none">
                <Image src={slide.img} objectFit="cover" />
              </Box>
            ))}
          </Flex>
          <HStack
            justify="end"
            right="10"
            pos="absolute"
            bottom="20px"
            w="full"
          >
            {Array.from({ length: slidesCount }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", "10px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: "blackAlpha.800" }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
export default CarouselBanner;
