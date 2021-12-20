import React from "react";
import { Box, Flex, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const CardHotel = ({ hotel }) => {
  return (
    <Link to={`/hotel/${hotel.id}`}>
      <Flex>
        <Box
          w="md"
          rounded="lg"
          shadow="lg"
          cursor="pointer"
          _hover={{ shadow: "xl" }}
        >
          <Image
            src={hotel.images[0]}
            alt={hotel.imageAlt}
            roundedTop="lg"
            objectFit="cover"
            h="220px"
          />

          <Box p="5">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" colorScheme="teal">
                {hotel.city}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {hotel.availableRooms} available
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {hotel.name}
            </Box>

            <Box>
              {hotel.priceFrom}$ - {hotel.priceTo}$
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < hotel.vote ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {hotel.feedbacks.length} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default CardHotel;
