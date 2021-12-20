import React from "react";
import { Box, Flex, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const CardRestaurant = ({ res }) => {
  const property = {
    imageUrl: res.imageCover,
    imageAlt: "Restaurant",
    price: res.price,
    cuisines: res.cuisines,
    title: res.name,
    formattedPrice: "$1,900.00",
    reviewCount: res.feedbacks?.length || 0,
    rating: res.vote,
  };

  return (
    <Link to={`/restaurant/${res.id}`}>
      <Flex>
        <Box
          w="md"
          rounded="lg"
          shadow="lg"
          cursor="pointer"
          _hover={{ shadow: "xl" }}
        >
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            roundedTop="lg"
            objectFit="cover"
            h="220px"
            w="100%"
          />

          <Box p="5">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" colorScheme="teal">
                {res.city}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.price} &bull; {property.cuisines}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default CardRestaurant;
