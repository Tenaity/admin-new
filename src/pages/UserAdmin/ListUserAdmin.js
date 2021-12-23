import React, { useContext } from "react";
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
import axios from "axios";
import AppContext from "../../components/AppContext";
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
          url: `https://pbl6-travelapp.herokuapp.com/users/${id}`,
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
                Xoá hoá người dùng thành công!
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
                    Tên khách hàng
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Giới tính
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Email
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Loại tài khoản
                  </Th>
                  <Th fontSize="sm" fontWeight="normal">
                    Số điện thoại
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
                            {item.gender}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.email}
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            color="gray.500"
                            fontWeight="normal"
                            fontSize="md"
                          >
                            {item.role}
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
export default function UserAdmin() {
  const { state } = useContext(AppContext);
  const user = state.user;
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
    [`https://pbl6-travelapp.herokuapp.com/users/`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  const dataFilter = data?.filter((item) => item.role !== "admin");
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <SideBar user={user} />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading size="lg" mb="10px">
            Danh sách người dùng
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <ComponentToPrint
                data={dataFilter}
                token={token}
                userId={userId}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
