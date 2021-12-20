import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
const ItemBill = () => {
  const property = {
    title: "Mường Thanh",
    formattedPrice: "$1,900.00",
  };
  return (
    <Box mb="5">
      <Box shadow="md" p="2" borderRadius="7">
        <Heading size="sm" mb="2">
          {property.title}
        </Heading>
        <Text mb="1">Phòng 310</Text>
        <Text mb="1">Ngày 22/10/2021 - 25/10/2021</Text>
        <Text mb="2">Giá: 1.000.000 VNĐ</Text>
        <Flex justifyContent="space-between">
          <Button bg="green.400">Chi tiết</Button>
          <Button bg="red.500">Xóa</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ItemBill;
