import React, { useState } from "react";
import { Box, SimpleGrid, Heading, Flex, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import CardHotel from "./CardHotel";
import BreadcrumbMain from "../BreadcrumbMain";
import PaginationMain from "./PaginationMain";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Main = () => {
  const [priceFrom, setPriceFrom] = useState("100");
  const [priceTo, setPriceTo] = useState("1100");
  const [sortby, setSortBy] = useState("vote");
  const onChangeHandle = (e) => {
    setPriceFrom(e.target.value.split(",")[0]);
    setPriceTo(e.target.value.split(",")[1] || priceFrom);
  };
  const onChangeHandleSort = (e) => {
    setSortBy(e.target.value);
  };

  const { data: hotel } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel?priceFrom=${priceFrom}&priceTo=${priceTo}&sort=${sortby}`,
    fetcher
  );
  console.log("list hotel", hotel);
  return (
    <>
      <Box d="flex" flexWrap="wrap" maxW="6xl" mx="auto" mt="5">
        <BreadcrumbMain urls={["Trang chủ", "Phòng khách sạn"]} />
        <Box w="6xl">
          <Box my="7">
            <Heading size="lg">{hotel?.length} hotel tại trang chủ</Heading>
          </Box>
          <Flex my="10" justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <HStack spacing="5">
                <Flex alignItems="center">
                  <Box mr="5">Giá</Box>
                  <Select onChange={onChangeHandle}>
                    <option value="100,200">100$-200$</option>
                    <option value="200,400">200$-400$</option>
                    <option value="400,500">400$-500$</option>
                    <option value="500,1000">500$-1000$</option>
                    <option value="1000"> {"> "}1000$</option>
                  </Select>
                </Flex>
              </HStack>
            </Flex>
            <Flex alignItems="center">
              <Box mr="10">Sắp xếp</Box>
              <Box>
                <Select onChange={onChangeHandleSort}>
                  <option value="vote">Nổi bật</option>
                  <option value="price-asc">Giá tăng</option>
                  <option value="price-desc">Giá giảm</option>
                </Select>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box mx="auto">
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            {hotel?.map((hotel) => (
              <CardHotel key={hotel.id} hotel={hotel} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <PaginationMain />
    </>
  );
};

export default Main;
