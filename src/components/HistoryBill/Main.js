import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import React, { useRef } from "react";
import useSWR from "swr";
const ComponentToPrint = (props) => {
  const { data = [] } = props;
  console.log(data);
  // let dateCheckIn = new Date(data.checkIn);
  // let dateCheckOut = new Date(data.checkOut);
  return (
    <Box
      w="7xl"
      justifySelf="center"
      alignSelf="center"
      mb="10"
      p={{ sm: "24px", md: "44px" }}
      shadow="lg"
    >
      <Box mb={{ sm: "40px" }}>
        <Flex direction="column" w="100%">
          <Heading>Lịch sử thanh toán</Heading>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Table mb="30px">
            <Thead>
              <Tr>
                <Th fontSize="sm" fontWeight="normal">
                  Dịch vụ
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Tên dịch vụ
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Mã hoá đơn
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Tình trạng
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Ngày đặt
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Ngày trả
                </Th>
                <Th fontSize="sm" fontWeight="normal">
                  Thành tiền
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((data) => {
                  return (
                    <Tr>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.service === "hotel"
                            ? "Đặt phòng khách sạn"
                            : ""}
                          {data.service === "restaurant"
                            ? "Đặt bàn nhà hàng"
                            : ""}
                          {data.service === "selfVehicle"
                            ? "Thuê xe tự lái"
                            : ""}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.name}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.id}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.status ? "Đã thanh toán" : "Chưa thanh toán"}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.checkIn
                            ? `${new Date(data.checkIn).getDate()}/${
                                new Date(data.checkIn).getMonth() + 1
                              }/${new Date(data.checkIn).getFullYear()}`
                            : ""}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.checkOut
                            ? `${new Date(data.checkOut).getDate()}/${
                                new Date(data.checkOut).getMonth() + 1
                              }/${new Date(data.checkOut).getFullYear()}`
                            : ""}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          color="gray.500"
                          fontWeight="normal"
                          fontSize="md"
                        >
                          {data.total}$
                        </Text>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

const Main = () => {
  const textColor = useColorModeValue("gray.700", "white");

  const componentRef = useRef();
  const userId = localStorage.getItem("useId");
  const token = localStorage.getItem("token");
  const fetcher = (url) => {
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const { data: bills } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/bill/${userId}`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  const data = bills?.filter((item) => item.status === true);
  console.log("history", data);
  return (
    <>
      <Flex direction="column" pt="10">
        <ComponentToPrint
          data={data}
          ref={componentRef}
          textColor={textColor}
        />
      </Flex>
    </>
  );
};

export default Main;
