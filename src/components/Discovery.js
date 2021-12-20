import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";

const Discovery = () => {
  return (
    <Box w="100vw" py="10">
      <Box maxW="7xl" mx="auto">
        <Heading size="lg" textAlign="center" pb="5">
          Bạn muốn khám phá điều gì?
        </Heading>
        <Tabs colorScheme={"green"}>
          <TabList>
            <Tab _focus={{ boxShadow: "none" }}>Các khách sạn hàng đầu</Tab>
            <Tab _focus={{ boxShadow: "none" }}>Các nhà hàng hàng đầu</Tab>
            <Tab _focus={{ boxShadow: "none" }}>
              Các chặng bay và hãng bay hàng đầu
            </Tab>
            <Tab _focus={{ boxShadow: "none" }}>
              Hoạt động Tham quan và Giải
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 3 }}>
                <Box>
                  <Text as="a" d="block" cursor="pointer" py="1">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                  <Text as="a" d="block" cursor="pointer" py="1">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                  <Text as="a" d="block" cursor="pointer" py="1">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 3 }}>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 3 }}>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 3 }}>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
                <Box>
                  <Text as="a" cursor="pointer">
                    Hoạt động Tham quan & Giải trí tại TP. HCM
                  </Text>
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Discovery;
