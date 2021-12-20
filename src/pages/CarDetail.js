import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { RiDoorLine } from "react-icons/ri";
import { GiDiscGolfBag, GiDuffelBag } from "react-icons/gi";
import { FiCrosshair } from "react-icons/fi";
import { GrManual } from "react-icons/gr";
import Footer from "../components/Footer";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import CarFeedBack from "../components/CarFeedBack";
import CarCarouselBeauty from "../components/CarCarouselBeauty";
import NewFeedBack from "../components/NewFeedBack";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const CarDetail = () => {
  let { id } = useParams();
  const { data = [] } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel/${id}/room/`,
    fetcher
  );

  const property = {
    imageUrl: "/images/car/car2_1.jpg",
    imageAlt: "Car",
    beds: 3,
    baths: 2,
    title: "BMW 1 Series",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 5,
  };

  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto">
          <BreadcrumbMain urls={["Trang chủ", "Xe tự lái", "Đặt xe"]} />
          <Box>
            <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
              <CarCarouselBeauty />
              <Box ml="10">
                <Heading mb="10">Mercedes-Benz A-Class</Heading>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">Cầu Giấy, Hà Nội, Việt Nam</Text>
                </Flex>
                <SimpleGrid columns={{ base: 2 }}>
                  <Flex alignItems="center" mb="4">
                    <MdAirlineSeatReclineNormal />
                    <Text ml="5px">5 chỗ ngồi</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <RiDoorLine />
                    <Text ml="5px">4 cửa</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiDiscGolfBag />
                    <Text ml="5px">1 hành lý lớn</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiDuffelBag />
                    <Text ml="5px">1 hành lý nhỏ</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FiCrosshair />
                    <Text ml="5px">Điều hòa nhiệt độ</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GrManual />
                    <Text ml="5px">Hộp số tay</Text>
                  </Flex>
                </SimpleGrid>
                <Stack>
                  <Box d="flex">
                    <Box mr="25px" width="390px">
                      <Text mb="4">Ngày thuê xe:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <DateTimePicker />
                      </InputGroup>
                    </Box>
                    <Box mr="25px" width="390px">
                      <Text mb="4">Ngày trả xe:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <DateTimePicker />
                      </InputGroup>
                    </Box>
                  </Box>

                  <Box d="flex" alignItems="baseline">
                    <IoReceiptOutline />
                    <Text as="button" align="left" ml="10px" mb="2">
                      Thanh toán khi đến nhận xe
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      w="300px"
                      color="white"
                      bg="green.500"
                      _hover={{
                        bg: "green.300",
                      }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Đặt xe
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
          <Box my="10">
            <Heading>Đánh giá xe</Heading>
            <Box my="10" alignItems="center">
              <Tabs
                align="center"
                isManual
                variant="enclosed"
                colorScheme="green"
              >
                <TabList>
                  <Tab>Tất cả</Tab>
                  <Tab>5 sao</Tab>
                  <Tab>4 sao</Tab>
                  <Tab>3 sao</Tab>
                  <Tab>2 sao</Tab>
                  <Tab>1 sao</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <CarFeedBack />
                    <NewFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <CarFeedBack />
                    <CarFeedBack />
                    <NewFeedBack />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Box my="10">
            <Heading>Xe liên quan</Heading>
            <Flex my="10">
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                  width="100%"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} rooms &bull; {property.available}{" "}
                      available
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
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                  width="100%"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} rooms &bull; {property.available}{" "}
                      available
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
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                  width="100%"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} rooms &bull; {property.available}{" "}
                      available
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
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default CarDetail;
