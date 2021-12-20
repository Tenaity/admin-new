import axios from "axios";
import React, { useState, useContext } from "react";
import AppContext from "../components/AppContext";
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
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoReceiptOutline,
  IoTvOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { FaToiletPaper, FaTemperatureHigh } from "react-icons/fa";
import {
  GiWashingMachine,
  GiSnowflake1,
  GiTooth,
  GiTowel,
  GiMedicinePills,
} from "react-icons/gi";
import Footer from "../components/Footer";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import CarouselBeauty from "../components/CarouselBeauty";
import ReactDatePicker from "react-datepicker";
import "../components/DateTimePicker/date-time-picker.css";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const HotelDetail = () => {
  let { id } = useParams();
  const { data: room } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/room/${id}`,
    fetcher
  );

  console.log("room detailllll", room);
  const toast = useToast();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const user = state?.user?.userName;
  console.log("context", state);
  const onSubmitHandle = async (e) => {
    if (user) {
      if (startDate && endDate) {
        try {
          e.preventDefault();
          const option = {
            method: "post",
            url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}`,
            data: {
              checkIn: startDate,
              checkOut: endDate,
              service: "hotel",
              additionalFee: 20,
              status: "false",
              guest: userId,
              hotel: room.idHotel.id,
              room: room._id,
              total: room.price,
              name: room.idHotel.name,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios(option);
          if (response.status === 201) {
            toast({
              render: () => (
                <Alert status="success" variant="left-accent">
                  <AlertIcon />
                  Đặt phòng thành công!
                </Alert>
              ),
            });
          }
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      } else {
        toast({
          render: () => (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              Bạn cần nhập đủ thông tin để đặt phòng!
            </Alert>
          ),
        });
      }
    } else {
      toast({
        render: () => (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            Bạn cần đăng nhập để đặt phòng!
          </Alert>
        ),
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto" mb="10">
          <BreadcrumbMain
            urls={["Trang chủ", "Phòng khách sạn", "Đặt phòng"]}
          />
          <Box>
            <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
              {room?.images && <CarouselBeauty images={room?.images} />}{" "}
              <Box ml="10">
                <Heading mb="4">{room?.idHotel.name}</Heading>
                <Flex alignItems="center" mb="4">
                  <IoBusinessOutline />
                  <Text ml="5px">{room?.idHotel.address}</Text>
                </Flex>
                <Flex alignItems="center" mb="4">
                  <BiArea />
                  <Text ml="5px">Căn hộ dịch vụ &bull; 55m</Text>
                </Flex>
                <Text mb="4">
                  Phòng riêng &bull; 1 Phòng tắm &bull; 1 giường &bull; 1 phòng
                  ngủ &bull; 2 khách (tối đa 3 khách)
                </Text>
                <SimpleGrid columns={{ base: 3 }}>
                  <Flex alignItems="center" mb="4">
                    <IoWifiOutline />
                    <Text ml="5px">Wifi</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiWashingMachine />
                    <Text ml="5px">Máy giặt</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiTowel />
                    <Text ml="5px">Khăn tắm</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FaTemperatureHigh />
                    <Text ml="5px">Máy sấy</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <IoTvOutline />
                    <Text ml="5px">TV</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiMedicinePills />
                    <Text ml="5px">Dầu gội, dầu xả</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiTooth />
                    <Text ml="5px">Kem đánh răng</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <GiSnowflake1 />
                    <Text ml="5px">Điều hòa</Text>
                  </Flex>
                  <Flex alignItems="center" mb="4">
                    <FaToiletPaper />
                    <Text ml="5px">Giấy vệ sinh</Text>
                  </Flex>
                </SimpleGrid>
                <Stack>
                  <Box d="flex">
                    <Box mr="25px">
                      <Text mb="4">Đặt phòng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          isClearable
                          placeholderText="Chọn ngày đặt phòng"
                        />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="4">Trả phòng:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <ReactDatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          isClearable
                          placeholderText="Chọn ngày trả phòng"
                        />
                      </InputGroup>
                    </Box>
                  </Box>

                  <Box d="flex" alignItems="baseline">
                    <IoReceiptOutline />
                    <Text mt="2" as="button" align="left" ml="10px" mb="2">
                      Thanh toán khi nhận phòng hoặc thanh toán trực tiếp.
                    </Text>
                  </Box>
                  <Flex alignItems="center" pb="3">
                    <Heading size="lg" mr="2">
                      Giá :
                    </Heading>
                    <Heading size="lg" color="green.500">
                      {room ? room.price : 100} $
                    </Heading>
                  </Flex>

                  <Flex justifyContent="center">
                    <Button
                      w="350px"
                      color="white"
                      bg="green.500"
                      _hover={{
                        bg: "green.300",
                      }}
                      _focus={{ boxShadow: "none" }}
                      onClick={onSubmitHandle}
                    >
                      Đặt khách sạn
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default HotelDetail;
