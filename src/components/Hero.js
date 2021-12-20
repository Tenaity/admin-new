import {
  Box,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
} from "@chakra-ui/react";
import {
  IoBusOutline,
  IoAirplaneOutline,
  IoBusinessOutline,
  IoTrainOutline,
  IoCarSportOutline,
  IoCogOutline,
  IoLocationOutline,
  IoCalendarOutline,
  IoMoonOutline,
  IoCaretDownOutline,
  IoManOutline,
  IoReceiptOutline,
  IoTimeOutline,
  IoRestaurantOutline,
} from "react-icons/io5";
const Hero = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box h="2xl" bg={useColorModeValue("gray.50", "gray.800")} w="100vw">
      <Box
        w="100vw"
        h="50vh"
        bgImage={
          bg === "white"
            ? "url('../../images/beach.jpg')"
            : "url('../../images/darkBeach.jpg')"
        }
        bgRepeat="no-repeat"
        bgPos="top"
        pos="relative"
        d="flex"
        justifyContent="center"
      >
        <Box
          pos="absolute"
          bg={bg}
          borderRadius="xl"
          w="800px"
          // h="400"
          top="300"
          boxShadow="2xl"
          overflow="hidden"
        >
          <Box>
            <Tabs defaultIndex={0} borderBottomColor="transparent">
              <TabList
                d="flex"
                justifyContent="center"
                bg={useColorModeValue("gray.200", "gray.600")}
              >
                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                  <IoBusinessOutline />
                  <Text ml="5px">Hotel</Text>
                </Tab>
                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                  <IoRestaurantOutline />
                  <Text ml="5px">Restaurant</Text>
                </Tab>
                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                  <IoTrainOutline /> <Text ml="5px">Train</Text>
                </Tab>
                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                  <IoCarSportOutline /> <Text ml="5px">Car</Text>
                </Tab>
                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                  <IoAirplaneOutline /> <Text ml="5px">Plane</Text>
                </Tab>
                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                  <IoBusOutline /> <Text ml="5px">Bus</Text>
                </Tab>{" "}
                <Tab isDisabled py={4} m={0}>
                  <IoCogOutline /> <Text ml="5px">Setting</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack>
                    <Box>
                      <Text mb="2">Thành phố địa điểm hoặc tên khách sạn:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoLocationOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="Đà Nẵng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box d="flex">
                      <Box mr="25px">
                        <Text mb="2">Nhận phòng:</Text>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<IoCalendarOutline />}
                          />
                          <Input
                            type="tel"
                            placeholder="Đặt phòng"
                            _focus={{ boxShadow: "1px none" }}
                          />
                        </InputGroup>
                      </Box>
                      <Box mr="25px">
                        <Text mb="2">Số đêm:</Text>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<IoMoonOutline />}
                          />
                          <Input
                            as="select"
                            placeholder="Số đêm ở tại khách sạn"
                            w="250px"
                            _focus={{ boxShadow: "none" }}
                            icon={<IoCaretDownOutline />}
                          >
                            <option value="option1">1 Đêm</option>
                            <option value="option1">2 Đêm</option>
                            <option value="option1">3 Đêm</option>
                            <option value="option1">4 Đêm</option>
                            <option value="option1">5 Đêm</option>
                            <option value="option1">6 Đêm</option>
                          </Input>
                        </InputGroup>
                      </Box>
                      <Box>
                        <Text mb="2">Trả phòng:</Text>
                        <Text mt="4">Thứ 5, 15 thg 3 2022</Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text mb="2">Khách và phòng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoManOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="1 người lớn, 0 trẻ em, 1 phòng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <IoReceiptOutline />
                      <Text as="button" align="left" ml="10px">
                        Thanh toán khi nhận phòng
                      </Text>
                    </Box>
                    <Box d="flex" justifyContent="center">
                      <Button
                        w="300px"
                        color="white"
                        bg={useColorModeValue("green.500", "green.700")}
                        _hover={{
                          bg: useColorModeValue("green.300", "green.500"),
                        }}
                        _focus={{ boxShadow: "none" }}
                      >
                        Tìm khách sạn
                      </Button>
                    </Box>
                  </Stack>
                </TabPanel>
                <TabPanel>Restaurant</TabPanel>
                <TabPanel>Train</TabPanel>
                <TabPanel>
                  <Box mb="10px">
                    <Text mb="2">Địa điểm thuê xe của bạn</Text>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<IoLocationOutline />}
                      />
                      <Input
                        type="tel"
                        placeholder="Điền thành phố, sân bay hoặc khách sạn"
                        _focus={{ boxShadow: "1px none" }}
                      />
                    </InputGroup>
                  </Box>
                  <Box d="flex" mb="10px">
                    <Box mr="25px">
                      <Text mb="2">Ngày bắt đầu:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="Đặt phòng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="2">Giờ bắt đầu:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoTimeOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="Đặt phòng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="2">Ngày kết thúc:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="Đặt phòng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="2">Giờ kết thúc:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoTimeOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="Đặt phòng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                  </Box>
                  <Box d="flex" justifyContent="center">
                    <Button
                      w="300px"
                      color="white"
                      bg={useColorModeValue("green.500", "green.700")}
                      _hover={{
                        bg: useColorModeValue("green.300", "green.500"),
                      }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Tìm xe
                    </Button>
                  </Box>
                </TabPanel>
                <TabPanel>Plane</TabPanel>
                <TabPanel>Bus</TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
