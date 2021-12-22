import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import Sidebar from "../components/SideBar";
export default function DashBoard() {
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </Box>
      </Box>
    </Box>
  );
}
