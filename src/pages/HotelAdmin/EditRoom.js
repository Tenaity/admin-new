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
import React, { useState, useContext, useEffect } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/SideBar";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function EditHotel() {
  const toast = useToast();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const { state } = useContext(AppContext);
  const user = state?.user;
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [room, setRoom] = useState("");
  const onChangeHandleCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeHandleImages = (e) => {
    setImages(e.target.value);
  };
  const onChangeHandleType = (e) => {
    setType(e.target.value);
  };
  const onChangeHandlePrice = (e) => {
    setPrice(e.target.value);
  };
  useEffect(async () => {
    let response = await axios({
      method: "get",
      url: `https://pbl6-travelapp.herokuapp.com/room/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    setImages(data.images);
    setPrice(data.price);
    setType(data.type);
    setCity(data.city);
    setRoom(data);
  }, []);

  const onSubmitHandle = async (e) => {
    const priceInt = parseInt(price);
    if (user) {
      try {
        e.preventDefault();
        const option = {
          method: "patch",
          url: `https://pbl6-travelapp.herokuapp.com/room/${id}`,
          data: {
            idHotel: room.idHotel.id,
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
        if (response.status === 200) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                C???p nh???t ph??ng kh??ch s???n th??nh c??ng!
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
            B???n c???n ????ng nh???p ????? th???c hi???n thao t??c!
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
            Ch???nh s???a ph??ng kh??ch s???n
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>Th??nh ph???</FormLabel>
                  <Input
                    name="city"
                    defaultValue={city}
                    onChange={onChangeHandleCity}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Lo???i</FormLabel>
                  <Input
                    name="type"
                    defaultValue={type}
                    onChange={onChangeHandleType}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Gi??</FormLabel>
                  <Input
                    name="price"
                    defaultValue={price}
                    onChange={onChangeHandlePrice}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>H??nh ???nh</FormLabel>
                  <Textarea
                    name="images"
                    defaultValue={images}
                    onChange={onChangeHandleImages}
                  />
                </FormControl>
              </SimpleGrid>
              <Flex mt={4} justifyContent="end">
                <Button onClick={onSubmitHandle}>X??c nh???n</Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
