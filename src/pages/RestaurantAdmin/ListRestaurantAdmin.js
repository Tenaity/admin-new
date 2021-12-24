import React, { useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/SideBar";
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
          url: `https://pbl6-travelapp.herokuapp.com/restaurant/${id}/detail`,
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
                Xoá nhà hàng thành công!
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
                    Tên nhà hàng
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Thành phố
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Địa chỉ
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Đặc sản
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Tổng số bàn
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Số bàn còn trống
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Giá thấp nhất
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Giá cao nhất
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Phí phụ thu
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
                            {item.type}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.totalTables}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.availableTables}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.priceFrom}$
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.priceTo}$
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.fee}$
                          </Text>
                        </Td>
                        <Td>
                          <Link to={`${item._id}/edit`}>
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
                              onDeleteHandle(item._id);
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
export default function ListRestaurantAdmin() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetcher = (url) => {
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const { data } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/restaurant/${userId}`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  console.log(data);
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <SideBar />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading size="lg" mb="10px">
            Danh sách nhà hàng
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
