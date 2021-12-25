import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import Sidebar from "../components/SideBar";
import AppContext from "../components/AppContext";
export default function DashBoard() {
  const { state } = useContext(AppContext);
  const user = state.user;
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <Sidebar user={user} />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading>Chào mừng bạn trở lại </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </Box>
      </Box>
    </Box>
  );
}
