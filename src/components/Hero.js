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
                      <Text mb="2">Th??nh ph??? ?????a ??i???m ho???c t??n kh??ch s???n:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoLocationOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="???? N???ng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box d="flex">
                      <Box mr="25px">
                        <Text mb="2">Nh???n ph??ng:</Text>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<IoCalendarOutline />}
                          />
                          <Input
                            type="tel"
                            placeholder="?????t ph??ng"
                            _focus={{ boxShadow: "1px none" }}
                          />
                        </InputGroup>
                      </Box>
                      <Box mr="25px">
                        <Text mb="2">S??? ????m:</Text>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<IoMoonOutline />}
                          />
                          <Input
                            as="select"
                            placeholder="S??? ????m ??? t???i kh??ch s???n"
                            w="250px"
                            _focus={{ boxShadow: "none" }}
                            icon={<IoCaretDownOutline />}
                          >
                            <option value="option1">1 ????m</option>
                            <option value="option1">2 ????m</option>
                            <option value="option1">3 ????m</option>
                            <option value="option1">4 ????m</option>
                            <option value="option1">5 ????m</option>
                            <option value="option1">6 ????m</option>
                          </Input>
                        </InputGroup>
                      </Box>
                      <Box>
                        <Text mb="2">Tr??? ph??ng:</Text>
                        <Text mt="4">Th??? 5, 15 thg 3 2022</Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text mb="2">Kh??ch v?? ph??ng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoManOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="1 ng?????i l???n, 0 tr??? em, 1 ph??ng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <IoReceiptOutline />
                      <Text as="button" align="left" ml="10px">
                        Thanh to??n khi nh???n ph??ng
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
                        T??m kh??ch s???n
                      </Button>
                    </Box>
                  </Stack>
                </TabPanel>
                <TabPanel>Restaurant</TabPanel>
                <TabPanel>Train</TabPanel>
                <TabPanel>
                  <Box mb="10px">
                    <Text mb="2">?????a ??i???m thu?? xe c???a b???n</Text>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<IoLocationOutline />}
                      />
                      <Input
                        type="tel"
                        placeholder="??i???n th??nh ph???, s??n bay ho???c kh??ch s???n"
                        _focus={{ boxShadow: "1px none" }}
                      />
                    </InputGroup>
                  </Box>
                  <Box d="flex" mb="10px">
                    <Box mr="25px">
                      <Text mb="2">Ng??y b???t ?????u:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="?????t ph??ng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="2">Gi??? b???t ?????u:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoTimeOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="?????t ph??ng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="2">Ng??y k???t th??c:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="?????t ph??ng"
                          _focus={{ boxShadow: "1px none" }}
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="2">Gi??? k???t th??c:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoTimeOutline />}
                        />
                        <Input
                          type="tel"
                          placeholder="?????t ph??ng"
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
                      T??m xe
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
