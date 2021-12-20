import React, { useContext, useState } from "react";
import {
  HStack,
  Box,
  Flex,
  Button,
  Heading,
  Avatar,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import axios from "axios";
import { useHistory } from "react-router";
import Bill from "./Bill";
import Search from "./Search";
import gogo from "../assets/img/logo2.png";
import useSWR from "swr";
import { Alert, AlertIcon } from "@chakra-ui/react";
const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [inputChange, setInputChange] = useState("");
  const onChangeHandle = (e) => {
    setInputChange(e.target.value);
  };
  const user = state.user;
  const history = useHistory();
  const toast = useToast();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: searchItem } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel?city=${inputChange}`,
    fetcher
  );
  console.log("SearchItem", searchItem);
  const signOut = () => {
    const token = localStorage.getItem("token");
    const option = {
      method: "post",
      url: "https://pbl6-travelapp.herokuapp.com/auth/logout",
      data: { refreshToken: { token } },
    };
    axios(option);
    toast({
      render: () => (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Đăng xuất thành công!
        </Alert>
      ),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch({ type: "CURRENT_USER", payload: null });
    history.push("/");
  };

  return (
    <Box
      bg="white"
      borderTop="5px solid"
      borderTopColor="green.500"
      pos="sticky"
      top="0"
      boxShadow="md"
      zIndex="sticky"
    >
      <Flex h="4.5rem" maxW="7xl" mx="auto">
        <Flex
          w="full"
          h="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex>
            <HStack spacing="5">
              <Heading as="a">
                <Link to="/">
                  <Image src={gogo} h="50px" maxW="120px" />
                </Link>
              </Heading>
              <Box mt="2">
                <Search searchItem={searchItem} onChange={onChangeHandle} />
              </Box>
            </HStack>
          </Flex>

          <Box>
            <HStack spacing="2">
              <Link to="/hotel">
                <Button
                  variant="ghost"
                  transform="auto"
                  _hover={{
                    color: "green.500",
                  }}
                >
                  Đặt phòng khách sạn
                </Button>
              </Link>
              <Link to="/restaurant">
                <Button
                  variant="ghost"
                  transform="auto"
                  _hover={{
                    color: "green.500",
                  }}
                >
                  Đặt bàn nhà hàng
                </Button>
              </Link>
              <Link to="/car">
                <Button
                  variant="ghost"
                  transform="auto"
                  _hover={{
                    color: "green.500",
                  }}
                >
                  Thuê xe tự lái
                </Button>
              </Link>

              {user ? (
                <>
                  <Bill />
                  <Menu>
                    <MenuButton>
                      <Button variant="ghost" color="orange.500">
                        <Avatar src="" w="50px" h="50px" me="15px" />
                        <Text>{user.userName}</Text>
                      </Button>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link to="/settings">Tài khoản</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/historybills">Lịch sử thanh toán</Link>
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem>
                        {" "}
                        <Text _focus={{ boxShadow: "none" }} onClick={signOut}>
                          Đăng xuất
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Link to="/signin">
                    <Button
                      variant="ghost"
                      transform="auto"
                      _hover={{
                        color: "green.500",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      color="white"
                      _focus={{ boxShadow: "none" }}
                      bg={"green.500"}
                      _hover={{ bg: "green.300" }}
                    >
                      Đăng ký
                    </Button>
                  </Link>
                </>
              )}
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
