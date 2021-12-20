import React from "react";
import { Box, useColorMode, Button, useColorModeValue } from "@chakra-ui/react";
function Navbar() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");
  return (
    <>
      <Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </>
  );
}

export default Navbar;
