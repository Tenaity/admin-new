import React, { useState } from "react";
import { Flex, Box, Image, Stack } from "@chakra-ui/react";
import productPage1 from "../assets/img/res/res1_2.jpg";
import productPage2 from "../assets/img/res/res1_3.jpg";
import productPage3 from "../assets/img/res/res1_4.jpg";
import productPage4 from "../assets/img/res/res1_5.jpg";
import productPage5 from "../assets/img/res/res1_6.jpg";
const ResCarouselBeauty = () => {
  const [currentImage, setCurrentImage] = useState(productPage1);
  return (
    <Flex
      direction="column"
      me={{ lg: "70px", xl: "120px" }}
      mb={{ sm: "24px", lg: "0px" }}
    >
      <Box
        w={{ sm: "275px", md: "670px", lg: "450px", xl: "550px" }}
        h={{ sm: "200px", md: "500px", lg: "330px", xl: "500px" }}
        mb="26px"
        mx={{ sm: "auto", lg: "0px" }}
      >
        <Image src={currentImage} w="100%" h="100%" borderRadius="15px" />
      </Box>
      <Stack
        direction="row"
        spacing={{ sm: "20px", md: "35px", lg: "20px" }}
        mx="auto"
        mb={{ sm: "24px", lg: "0px" }}
      >
        <Box
          w={{ sm: "36px", md: "90px", lg: "60px" }}
          h={{ sm: "36px", md: "90px", lg: "60px" }}
        >
          <Image
            src={productPage1}
            w="100%"
            h="100%"
            borderRadius="15px"
            cursor="pointer"
            onClick={(e) => setCurrentImage(e.target.src)}
          />
        </Box>
        <Box
          w={{ sm: "36px", md: "90px", lg: "60px" }}
          h={{ sm: "36px", md: "90px", lg: "60px" }}
        >
          <Image
            src={productPage2}
            w="100%"
            h="100%"
            borderRadius="15px"
            cursor="pointer"
            onClick={(e) => setCurrentImage(e.target.src)}
          />
        </Box>
        <Box
          w={{ sm: "36px", md: "90px", lg: "60px" }}
          h={{ sm: "36px", md: "90px", lg: "60px" }}
        >
          <Image
            src={productPage3}
            w="100%"
            h="100%"
            borderRadius="15px"
            cursor="pointer"
            onClick={(e) => setCurrentImage(e.target.src)}
          />
        </Box>
        <Box
          w={{ sm: "36px", md: "90px", lg: "60px" }}
          h={{ sm: "36px", md: "90px", lg: "60px" }}
        >
          <Image
            src={productPage4}
            w="100%"
            h="100%"
            borderRadius="15px"
            cursor="pointer"
            onClick={(e) => setCurrentImage(e.target.src)}
          />
        </Box>
        <Box
          w={{ sm: "36px", md: "90px", lg: "60px" }}
          h={{ sm: "36px", md: "90px", lg: "60px" }}
        >
          <Image
            src={productPage5}
            w="100%"
            h="100%"
            borderRadius="15px"
            cursor="pointer"
            onClick={(e) => setCurrentImage(e.target.src)}
          />
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResCarouselBeauty;
