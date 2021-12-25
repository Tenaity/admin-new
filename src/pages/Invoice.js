import {
  Box,
  Flex,
  Heading,
  Stack,
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
import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PayPalButton } from "react-paypal-button-v2";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useHistory } from "react-router";
import axios from "axios";
const ComponentToPrint = (props) => {
  const { data = [] } = props;
  const { userId } = props;
  const { token } = props;
  let dateCheckIn = new Date(data.checkIn);
  let dateCheckOut = new Date(data.checkOut);
  const toast = useToast();
  const history = useHistory();
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
          <Heading>Thanh toán hoá đơn</Heading>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Table mb="30px">
            <Thead>
              {data.service === "hotel" && (
                <Tr>
                  <Th fontSize="sm" fontWeight="normal">
                    Dịch vụ
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Tên khách sạn
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
              )}
              {data.service === "restaurant" && (
                <Tr>
                  <Th fontSize="sm" fontWeight="normal">
                    Dịch vụ
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Tên nhà hàng
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
                    Thành tiền
                  </Th>
                </Tr>
              )}
              {data.service === "selfVehicle" && (
                <Tr>
                  <Th fontSize="sm" fontWeight="normal">
                    Dịch vụ
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Dịch vụ cho thuê
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
              )}
            </Thead>
            <Tbody>
              {data.service === "hotel" && (
                <Tr>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      Đặt phòng khách sạn
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.name}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.id}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.status ? "Đã thanh toán" : "Chưa thanh toán"}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {`${dateCheckIn.getDate()}/${
                        dateCheckIn.getMonth() + 1
                      }/${dateCheckIn.getFullYear()}`}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {`${dateCheckOut.getDate()}/${
                        dateCheckOut.getMonth() + 1
                      }/${dateCheckOut.getFullYear()}`}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.total}$
                    </Text>
                  </Td>
                </Tr>
              )}
              {data.service === "restaurant" && (
                <Tr>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      Đặt bàn nhà hàng
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.name}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.id}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.status ? "Đã thanh toán" : "Chưa thanh toán"}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {`${dateCheckIn.getDate()}/${
                        dateCheckIn.getMonth() + 1
                      }/${dateCheckIn.getFullYear()}`}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.total}$
                    </Text>
                  </Td>
                </Tr>
              )}
              {data.service === "selfVehicle" && (
                <Tr>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      Thuê xe tự lái
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.name}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.id}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.status ? "Đã thanh toán" : "Chưa thanh toán"}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {`${dateCheckIn.getDate()}/${
                        dateCheckIn.getMonth() + 1
                      }/${dateCheckIn.getFullYear()}`}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {`${dateCheckOut.getDate()}/${
                        dateCheckOut.getMonth() + 1
                      }/${dateCheckOut.getFullYear()}`}
                    </Text>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontWeight="normal" fontSize="md">
                      {data.total}$
                    </Text>
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          <Box pl="200px">
            <PayPalButton
              style={{ layout: "vertical" }}
              options={{
                clientId:
                  "AditNkLJT4JHknvoPaV4m12tWAGIk0dZ-gsAHX5gsXi4KfqlFeFS57W9E20nQaPKOy-W_bQJWoyBpQEr",
                currency: "USD",
              }}
              amount={data?.total}
              onSuccess={() => {
                toast({
                  render: () => (
                    <Alert status="success" variant="left-accent">
                      <AlertIcon />
                      Thanh toán thành công!
                    </Alert>
                  ),
                });
                history.push("/");
                return axios({
                  method: "patch",
                  url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}/${data.id}`,
                  data: {
                    status: true,
                  },
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function Invoice() {
  const textColor = useColorModeValue("gray.700", "white");
  const componentRef = useRef();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  let { id } = useParams();
  const fetcher = (url) => {
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };
  const { data: bill } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/bill/${userId}/${id}`, token],
    fetcher,
    { refreshInterval: 1000 }
  );

  return (
    <>
      <Navbar />
      <Flex direction="column" pt="10">
        <ComponentToPrint
          data={bill}
          userId={userId}
          ref={componentRef}
          textColor={textColor}
          token={token}
        />
      </Flex>
      <Footer />
    </>
  );
}

export default Invoice;
