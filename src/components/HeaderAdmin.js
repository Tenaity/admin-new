import {
  Avatar,
  Flex,
  InputGroup,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useToast,
  Button,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useHistory } from "react-router";
const HeaderAdmin = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.user;
  const { userName } = user || "";
  const toast = useToast();
  const history = useHistory();
  const onSignOut = () => {
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
    history.push("/signin");
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg="white"
      borderBottomWidth="1px"
      borderColor="inherit"
      h="16"
    >
      <InputGroup w="96" display={{ base: "none", md: "flex" }}></InputGroup>

      <Flex align="center" mr="50px">
        <Menu>
          <MenuButton>
            <Button variant="ghost" color="orange.500">
              <Avatar size="sm" src="" w="50px" h="50px" me="15px" />
              <Text>{userName}</Text>
            </Button>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onSignOut}>
              <Text _focus={{ boxShadow: "none" }}>Đăng xuất</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default HeaderAdmin;
