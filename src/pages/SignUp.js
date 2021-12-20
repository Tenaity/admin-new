import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Center,
  Select,
} from "@chakra-ui/react";
import * as React from "react";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import DividerWithText from "../components/loginComponent/DividerWithText";
import Testimonial from "../components/loginComponent/Testimonial";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState, useContext } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import AppContext from "../components/AppContext";
import { useHistory } from "react-router";
const SignUp = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);

  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "https://pbl6-travelapp.herokuapp.com/auth/register",
        data: userInput,
      };
      const response = await axios(option);
      const { user, tokens } = response.data;
      const userName = user.name;
      localStorage.setItem("token", tokens.access.token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      history.push("/");
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
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
      <Box>
        <Box maxW="6xl" mx="auto" my="auto" px={{ base: "4", md: "10" }}>
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
                    Welcome to GoGo
                  </Heading>
                </Box>
                <form onSubmit={onSubmitHandle}>
                  <Stack spacing="4">
                    <FormControl>
                      <FormLabel mb={1}>Name</FormLabel>
                      <Input
                        name="name"
                        value={userInput.name}
                        onChange={onChangeHandle}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mb={1}>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={userInput.email}
                        onChange={onChangeHandle}
                      />
                    </FormControl>
                    <FormControl>
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
                    <FormControl>
                      <FormLabel mb={1}>Role</FormLabel>
                      <Select
                        name="role"
                        value={userInput.role}
                        onChange={onChangeHandle}
                        placeholder="Select Role"
                      >
                        <option value="guest">User</option>
                        <option value="partner">Provider</option>
                      </Select>
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="green"
                      size="lg"
                      fontSize="md"
                    >
                      Create my account
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
                Already have an account?{" "}
                <Link to="/signin">
                  <Box
                    as="a"
                    href="#"
                    color="green.600"
                    display={{ base: "block", md: "inline-block" }}
                  >
                    Log in to GoGo
                  </Box>
                </Link>
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Center>
  );
};

export default SignUp;
