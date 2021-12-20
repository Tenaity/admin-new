import {
  Box,
  createIcon,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  HStack,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";

const RightArrow = createIcon({
  viewBox: "0 0 11 12",
  d: "M0 0L4.8 6L0 12H5.78182L10.5818 6L5.78182 0H0Z",
});

const links = [
  { label: "Thông báo giá vé", href: "#" },
  { label: "Danh sách đã lưu", href: "#" },
  { label: "Easy Reschedule", href: "#" },
  { label: "Passenger Quick Pick", href: "#" },
];

const FeatureLink = (props) => {
  const { children, ...rest } = props;
  return (
    <HStack
      as="a"
      align="center"
      fontSize="md"
      className="group"
      cursor="pointer"
      {...rest}
    >
      <Box fontWeight="semibold">{children}</Box>
      <RightArrow
        color={mode("green.500", "green.400")}
        fontSize="sm"
        transition="transform 0.2s"
        pos="relative"
        top="2px"
        _groupHover={{ transform: "translateX(2px)" }}
      />
    </HStack>
  );
};

const FeatureEndow = () => {
  return (
    <Box as="section" w="100vw">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        // py="12"
        borderColor={useColorModeValue("gray.300", "gray.700")}
      >
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <Box flex="1" maxW={{ lg: "xl" }}>
            <Img
              d={{ base: "none", md: "block" }}
              htmlWidth="560px"
              htmlHeight="430px"
              borderRadius="10"
              w="100%"
              h="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
            />
          </Box>
          <Box
            ms={{ lg: "12" }}
            mt={{ base: "12", lg: 0 }}
            flex="1"
            maxW={{ lg: "xl" }}
          >
            <Box maxW={{ base: "xl", lg: "unset" }}>
              <Box as="b" color={mode("green.500", "green.300")}>
                Có thể bạn chưa biết
              </Box>
              <Heading
                mt="4"
                mb="5"
                size="xl"
                fontWeight="extrabold"
                lineHeight="1.2"
              >
                Chỉ dành riêng cho thành viên GoGo
              </Heading>
              <Text fontSize="lg" color={mode("gray.600", "gray.400")}>
                Ưu đãi dành riêng cho thành viên GoGo
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} mt="8">
              {links.map((link) => (
                <Flex key={link.label} align="center" minH="14">
                  <FeatureLink href={link.href}>{link.label}</FeatureLink>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
        <Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} mt="20" spacing="6">
            <Box>
              <Heading size="lg">
                Thêm không gian cho gia đình và bạn bè
              </Heading>
              <Text>
                Rất nhiều lựa chọn hấp dẫn các căn hộ và biệt thự trên GoGo
              </Text>
            </Box>
            <Box>
              <Img
                borderRadius="5"
                htmlWidth="560px"
                htmlHeight="430px"
                w="90%"
                h="90%"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
              />
              <Text>
                <strong>Biệt thự</strong>
              </Text>

              <Text>17,000+ Biệt thự</Text>
            </Box>
            <Box>
              <Img
                borderRadius="5"
                htmlWidth="560px"
                htmlHeight="430px"
                w="90%"
                h="90%"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
              />
              <Text>
                <strong>Căn hộ</strong>
              </Text>
              <Text>25,000+ Căn hộ</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureEndow;
