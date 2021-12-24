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
export default function CreateHotel() {
  const toast = useToast();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const user = state?.user;
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);

  const onChangeHandleCity = (e) => {
    setCity(e.target.value);
  };
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
      console.log("addrooomhotel", {
        idHotel: id,
        city: city,
        available: ["2021/12/23", "2021/12/24", "2021/12/25"],
        type: type,
        images: [images],
        price: priceInt,
      });
      try {
        e.preventDefault();
        const option = {
          method: "post",
          url: `https://pbl6-travelapp.herokuapp.com/room`,
          data: {
            idHotel: id,
            city: city,
            available: ["2021/12/23", "2021/12/24", "2021/12/25"],
            type: type,
            images: [images],
            price: priceInt,
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
                Tạo mới phòng khách sạn thành công!
              </Alert>
            ),
          });
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
      <SideBar user={user} />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <HeaderAdmin />
        <Box as="main" p="4">
          <Heading size="lg" mb="10px">
            Tạo mới phòng khách sạn
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>Thành phố</FormLabel>
                  <Input name="city" onChange={onChangeHandleCity} />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá</FormLabel>
                  <Input name="price" onChange={onChangeHandlePrice} />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Loại</FormLabel>
                  <Input name="type" onChange={onChangeHandleType} />
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
