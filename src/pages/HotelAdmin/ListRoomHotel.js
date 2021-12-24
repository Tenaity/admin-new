import React, { useState, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/SideBar";
import {
  Box,
  Button,
  Flex,
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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AppContext from "../../components/AppContext";
const ComponentToPrint = (props) => {
  const { data = [] } = props;
  const { userId } = props;
  const { token } = props;
  console.log("useriddddd", userId);
  console.log("tokennnn", token);
  const toast = useToast();

  const onDeleteHandle = async (id) => {
    console.log(id);
    if (userId) {
      try {
        const option = {
          method: "delete",
          url: `https://pbl6-travelapp.herokuapp.com/room/${id}`,
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
                Xoá phòng thành công!
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
                    Thành phố
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Giá
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Loại
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
                            {item.city}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.price}
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
                          <Link to={`/hoteladmin/room/${item._id}/edit`}>
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
export default function ListRoomHotelAdmin() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const { state } = useContext(AppContext);
  const user = state?.user;
  const { id } = useParams();
  const fetcher = (url) => {
    return fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const { data } = useSWR(
    [`https://pbl6-travelapp.herokuapp.com/room/${id}/all`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  console.log(data);
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <SideBar user={user} />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading size="lg" mb="10px">
            Danh sách phòng khách sạn
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <ComponentToPrint data={data} token={token} userId={userId} />
            </Box>
            <Flex p="24px" justifyContent="end">
              <Link to={`/hoteladmin/${id}/room/new`}>
                <Button>Thêm phòng</Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
