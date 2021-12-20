import React from "react";
import { Box, SimpleGrid, Heading, Flex, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import CardCar from "./CardCar";
import BreadcrumbMain from "../BreadcrumbMain";
import PaginationMain from "./PaginationMain";
import useSWR from "swr";
import { dummyData } from "../BookCar/DummyData";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Main = () => {
  const { data = [] } = useSWR(
    "https://pbl6-travelapp.herokuapp.com/hotel", //////////
    fetcher
  );
  return (
    <>
      <Box d="flex" flexWrap="wrap" maxW="6xl" mx="auto" mt="5">
        <BreadcrumbMain urls={["Trang chủ", "Xe Tự Lái"]} />
        <Box w="6xl">
          <Box my="7">
            <Heading size="lg">802 Xe tự lái tại Hà Nội</Heading>
          </Box>
          <Flex my="10" justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <HStack spacing="5">
                <Flex alignItems="center">
                  <Box mr="5" width="115px" > Chỗ ngồi </Box>
                  <Select>
                    <option value="option1">04</option>
                    <option value="option2">06</option>
                    <option value="option3">16</option>
                  </Select>
                </Flex>
                <Flex alignItems="center">
                  <Box mr="5">Giá</Box>
                  <Select>
                    <option value="option1">0$-25$</option>
                    <option value="option2">25$-50$</option>
                    <option value="option3">50$+</option>
                  </Select>
                </Flex>
                <Flex alignItems="center">
                  <Box mr="5">Sao</Box>
                  <Select>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                  </Select>
                </Flex>
              </HStack>
            </Flex>
            <Flex alignItems="center">
              <Box mr="10">Sắp xếp</Box>
              <Box>
                <Select>
                  <option value="option1">Nổi bật</option>
                  <option value="option1">Giá</option>
                </Select>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box mx="auto">
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            {dummyData?.map((car) => (
              <CardCar key={car.id} car={car} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <PaginationMain />
    </>
  );
};

export default Main;
