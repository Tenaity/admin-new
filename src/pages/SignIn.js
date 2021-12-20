import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useContext } from "react";
import Testimonial from "../components/loginComponent/Testimonial";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import AppContext from "../components/AppContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/react";
const SignIn = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);
  const toast = useToast();
  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "https://pbl6-travelapp.herokuapp.com/auth/login",
        data: userInput,
      };
      const response = await axios(option);
      const { user, tokens } = response.data;
      const userName = user.name;
      const userId = user.id;
      localStorage.setItem("token", tokens.access.token);
      localStorage.setItem("userId", userId);
      dispatch({ type: "CURRENT_USER", payload: { userName, userId } });
      history.push("/");
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
    toast({
      render: () => (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Đăng nhập thành công!
        </Alert>
      ),
    });
  };

  const onClickReveal = () => {
    onToggle();
    const input = inputRef.current;
    if (input) {
      input.focus({ preventScroll: true });
      const length = input.value.length * 2;
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length);
      });
    }
  };

  return (
    <Center w="100vw" h="100vh">
      <Box
        maxW="6xl"
        mx="auto"
        py={{ base: "10", md: "20" }}
        px={{ base: "4", md: "10" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="14">
          <Flex
            direction="column"
            py="24"
            display={{ base: "none", lg: "flex" }}
          >
            <Testimonial />
            <SimpleGrid
              columns={3}
              spacing="10"
              paddingStart="12"
              alignItems="center"
              color="gray.400"
            ></SimpleGrid>
          </Flex>
          <Box w="full" maxW="xl" mx="auto">
            <Box
              bg="white"
              rounded={{ md: "2xl" }}
              p={{ base: "4", md: "12" }}
              borderWidth={{ md: "1px" }}
              borderColor="gray.200"
              shadow={{ md: "2xl" }}
            >
              <Box mb="8" textAlign={{ base: "center", md: "start" }}>
                <Heading size="lg" mb="2" fontWeight="extrabold">
                  Chào mừng bạn trở lại với GoGo
                </Heading>
                <Text fontSize="lg" color="gray.600" fontWeight="medium">
                  Đặt chỗ ngay thôi nào !
                </Text>
              </Box>
              <form onSubmit={onSubmitHandle}>
                <Stack spacing="4">
                  <FormControl id="email">
                    <FormLabel mb={1}>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={userInput.email}
                      onChange={onChangeHandle}
                      required
                    />
                  </FormControl>
                  <FormControl id="password">
                    <Flex justify="space-between">
                      <FormLabel>Password</FormLabel>
                      <Box
                        as="a"
                        color="green.600"
                        fontWeight="semibold"
                        fontSize="sm"
                      >
                        Forgot Password?
                      </Box>
                    </Flex>
                    <InputGroup>
                      <InputRightElement>
                        <IconButton
                          bg="transparent !important"
                          variant="ghost"
                          aria-label={
                            isOpen ? "Mask password" : "Reveal password"
                          }
                          icon={isOpen ? <HiEyeOff /> : <HiEye />}
                          onClick={onClickReveal}
                        />
                      </InputRightElement>
                      <Input
                        name="password"
                        value={userInput.password}
                        onChange={onChangeHandle}
                        type={isOpen ? "text" : "password"}
                        required
                      />
                    </InputGroup>
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="green"
                    size="lg"
                    fontSize="md"
                  >
                    Log In
                  </Button>
                  {errorMessage ? (
                    <Text
                      fontSize="lg"
                      color="red"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      {errorMessage}
                    </Text>
                  ) : (
                    ""
                  )}
                </Stack>
              </form>
            </Box>
            <Text mt="8" align="center" fontWeight="medium">
              Đăng ký ngay{" "}
              <Link to="/signup">
                <Box
                  as="a"
                  href="#"
                  color="green.600"
                  display={{ base: "block", md: "inline-block" }}
                >
                  Sign up to GoGo
                </Box>
              </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default SignIn;
