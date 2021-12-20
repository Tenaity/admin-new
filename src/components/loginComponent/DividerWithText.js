import {
  Divider,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

const DividerWithText = () => (
  <HStack my="8">
    <Divider />
    <Text
      px="3"
      textTransform="uppercase"
      fontSize="sm"
      fontWeight="semibold"
      color={mode("gray.600", "gray.200")}
    >
      Or
    </Text>
    <Divider />
  </HStack>
);

export default DividerWithText;
