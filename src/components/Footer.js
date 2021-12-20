import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AppStore, GooglePlay } from "../logos/logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Container as={Stack} maxW="7xl" py="10">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1.5fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Heading>Tenaity</Heading>
            <Text fontSize={"sm"}>© 2021 Tenaity. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Gmail"} href={"#"}>
                <SiGmail />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>

          <Stack>
            <ListHeader>Install App</ListHeader>
            <Stack direction={"row"}>
              <AppStore borderColor="red" />
            </Stack>
            <Stack direction={"row"}>
              <GooglePlay />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        borderTop="1px solid"
        borderColor={useColorModeValue("gray.300", "gray.700")}
        textAlign="center"
        py="2"
      >
        <Text>Copyright © 2021 Tenaity, Inc. All rights reserved.</Text>
      </Box>
    </Box>
  );
};
export default Footer;
