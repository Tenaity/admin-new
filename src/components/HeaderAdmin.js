import {
  Avatar,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React from "react";
const HeaderAdmin = () => {
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
      h="14"
    >
      <InputGroup w="96" display={{ base: "none", md: "flex" }}>
        <InputLeftElement color="gray.500" children={<FiSearch />} />
        <Input placeholder="Search for articles..." />
      </InputGroup>

      <Flex align="center">
        <Icon color="gray.500" as={FaBell} cursor="pointer" />
        <Avatar
          ml="4"
          size="sm"
          name="anubra266"
          src="https://avatars.githubusercontent.com/u/30869823?v=4"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
};

export default HeaderAdmin;
