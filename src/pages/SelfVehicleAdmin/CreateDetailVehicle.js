import {
  Box,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  FormLabel,
  FormControl,
  Flex,
  Button,
} from "@chakra-ui/react";
import AppContext from "../../components/AppContext";
import React, { useState, useContext } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/SideBar";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

export default function CreateDetailVehicle() {
  const toast = useToast();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const user = state?.user?.userName;
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);
  const history = useHistory();

  const onChangeHandleType = (e) => {
    setType(e.target.value);
  };

  const onChangeHandleImages = (e) => {
    setImages(e.target.value);
  };
  const onChangeHandlePrice = (e) => {
    setPrice(e.target.value);
  };
  const onSubmitHandle = async (e) => {
    if (user) {
      const priceInt = parseInt(price);
      try {
        e.preventDefault();
        const option = {
          method: "post",
          url: `https://pbl6-travelapp.herokuapp.com/detailVehicle`,
          data: {
            idSelfVehicle: id,
            type: type,
            images: [images],
            price: priceInt,
            imageCover: "#"
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(option);
        console.log(response);
        if (response.status === 201) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                Tạo mới xe thành công!
              </Alert>
            ),
          });
          history.push("list");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast({
        render: () => (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            Bạn cần đăng nhập để thực hiện thao tác!
          </Alert>
        ),
      });
    }
  };
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <SideBar />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading size="lg" mb="10px">
            Tạo mới xe
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>Loại</FormLabel>
                  <Input name="type" onChange={onChangeHandleType} />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá</FormLabel>
                  <Input name="price" onChange={onChangeHandlePrice} />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Hình ảnh</FormLabel>
                  <Textarea name="images" onChange={onChangeHandleImages} />
                </FormControl>
              </SimpleGrid>
              <Flex mt={4} justifyContent="end">
                <Button onClick={onSubmitHandle}>Xác nhận</Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
