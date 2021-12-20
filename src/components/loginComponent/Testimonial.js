import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { ImQuotesLeft } from "react-icons/im";
function Testimonial() {
  return (
    <Flex as="blockquote" flex="1">
      <Box marginEnd="4" fontSize="32px" color="gray.300">
        <ImQuotesLeft />
      </Box>
      <Box>
        <Text fontSize="2xl" mt="4">
          Chào mừng bạn đã đến với GoGo nơi đưa bạn và người thân nhanh chóng
          trải nghiệm những dịch vụ sang trọng, những trải nghiệm mang đến nhiều
          niềm vui, sự mới lạ đến gia đình bạn một cách nhanh chóng và tiện lợi.
        </Text>
        <HStack spacing="4" mt="8">
          <Box>
            <Text as="cite" fontStyle="normal" fontWeight="medium">
              Tenaity Võ
            </Text>
            <Text color={mode("gray.600", "gray.400")}>Founder GoGo</Text>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Testimonial;
