import React, { useState, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/SideBar";
import AppContext from "../../components/AppContext";
import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import useSWR from "swr";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
const ComponentToPrint = (props) => {
  const { data = [] } = props;
  const { userId } = props;
  const { token } = props;
  console.log("useriddddd", userId);
  console.log("tokennnn", token);
  const toast = useToast();

  const onDeleteHandle = async (id) => {
    if (userId) {
      try {
        const option = {
          method: "delete",
          url: `https://pbl6-travelapp.herokuapp.com/hotel/${id}/detail`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(option);
        if (response.status === 204) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                Xoá hoá đơn thành công!
              </Alert>
            ),
          });
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box>
      <Box>
        <Box>
          <Table mb="30px">
            <Thead>
              {data && (
                <Tr>
                  <Th fontSize="sm" fontWeight="normal">
                    Tên khách sạn
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Thành phố
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Địa chỉ
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Tổng số phòng
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Số điện thoại
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Giá thấp nhất
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Giá cao nhất
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Xem danh sách phòng
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Chỉnh sửa
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Xoá
                  </Th>
                </Tr>
              )}
            </Thead>
            <Tbody>
              {data &&
                data?.map((item, index) => {
                  return (
                    <>
                      <Tr>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.name}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.city}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.address}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.totalRooms}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.phone}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.priceFrom}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.priceTo}
                          </Text>
                        </Td>
                        <Td>
                          <Link to={`${item.id}/room/list`}>
                            <Text
                              as="button"
                              color="green.500"
                              fontWeight="normal"
                              fontSize="md"
                            >
                              Xem
                            </Text>
                          </Link>
                        </Td>
                        <Td>
                          <Link to={`${item.id}/edit`}>
                            <Text
                              as="button"
                              color="orange.500"
                              fontWeight="normal"
                              fontSize="md"
                            >
                              Chỉnh sửa
                            </Text>
                          </Link>
                        </Td>
                        <Td>
                          <Text
                            as="button"
                            color="red.500"
                            fontWeight="normal"
                            fontSize="md"
                            onClick={() => {
                              onDeleteHandle(item.id);
                            }}
                          >
                            Xoá
                          </Text>
                        </Td>
                      </Tr>
                    </>
                  );
                })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};
export default function ListHotelAdmin() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  var data = "";
  const { state } = useContext(AppContext);
  const user = state.user;
  const { userName } = user || "";
  const fetcher = (url) => {
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };
  const { data: admin } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/hotel`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  const { data: partner } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/hotel/${userId}`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  if (userName === "admin") {
    data = admin;
  } else {
    data = partner;
  }
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <SideBar user={user} />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading size="lg" mb="10px">
            Danh sách khách sạn
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <ComponentToPrint data={data} token={token} userId={userId} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
