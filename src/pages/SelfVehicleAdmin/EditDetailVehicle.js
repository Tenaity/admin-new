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
import { useHistory } from "react-router-dom";

export default function EditDetailVehicle() {
  const toast = useToast();
  const { id, idVehicle } = useParams();
  const token = localStorage.getItem("token");
  const { state } = useContext(AppContext);
  const user = state?.user;
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [detailVehicle, setDetailVehicle] = useState("");
  const history = useHistory();

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
      url: `https://pbl6-travelapp.herokuapp.com/detailVehicle/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    setImages(data.images);
    setPrice(data.price);
    setType(data.type);
    setDetailVehicle(data);
  }, []);

  const onSubmitHandle = async (e) => {
    const priceInt = parseInt(price);
    if (user) {
      try {
        e.preventDefault();
        const option = {
          method: "patch",
          url: `https://pbl6-travelapp.herokuapp.com/detailVehicle/${id}`,
          data: {
            idSelfVehicle: detailVehicle.idSelfVehicle.id,
            type: type,
            images: images,
            price: priceInt,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(option);
        console.log(response);
        if (response.status === 200) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                Cập nhật xe thành công!
              </Alert>
            ),
          });
          history.push(`/selfVehicleAdmin/${idVehicle}/detailVehicle/list`);
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
            Chỉnh sửa xe
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>Loại xe</FormLabel>
                  <Input
                    name="type"
                    defaultValue={type}
                    onChange={onChangeHandleType}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá</FormLabel>
                  <Input
                    name="price"
                    defaultValue={price}
                    onChange={onChangeHandlePrice}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Hình ảnh</FormLabel>
                  <Textarea
                    name="images"
                    defaultValue={images}
                    onChange={onChangeHandleImages}
                  />
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
