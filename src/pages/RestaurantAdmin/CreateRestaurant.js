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
import { useHistory } from "react-router-dom";

export default function CreateRestaurant() {
  const toast = useToast();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const user = state?.user?.userName;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [totalTables, setTotalTables] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [fee, setFee] = useState("");
  const [images, setImages] = useState([]);
  const [type, setType] = useState("");

  const onChangeHandleName = (e) => {
    setName(e.target.value);
  };
  const onChangeHandleCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeHandleType = (e) => {
    setType(e.target.value);
  };
  const onChangeHandleAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangeHandleTotalTables = (e) => {
    setTotalTables(e.target.value);
  };
  const onChangeHandleImages = (e) => {
    setImages(e.target.value);
  };
  const onChangeHandlePriceFrom = (e) => {
    setPriceFrom(e.target.value);
  };
  const onChangeHandlePriceTo = (e) => {
    setPriceTo(e.target.value);
  };
  const onChangeHandleFee = (e) => {
    setFee(e.target.value);
  };
  const onSubmitHandle = async (e) => {
    if (user) {
      try {
        e.preventDefault();
        const option = {
          method: "post",
          url: `https://pbl6-travelapp.herokuapp.com/restaurant/${userId}`,
          data: {
            name: name,
            idUser: userId,
            city: city,
            address: address,
            totalTables: Number(totalTables),
            imageCover: "#",
            images: [images],
            priceFrom: Number(priceFrom),
            priceTo: Number(priceTo),
            availableTables: Number(totalTables),
            fee: Number(fee),
            type: type
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
                Tạo mới nhà hàng thành công!
              </Alert>
            ),
          });
          history.push("/restaurantAdmin/list");
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
            Tạo mới nhà hàng
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>Tên nhà hàng</FormLabel>
                  <Input
                    name="name"
                    value={name}
                    onChange={onChangeHandleName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Thành phố</FormLabel>
                  <Input
                    name="city"
                    value={city}
                    onChange={onChangeHandleCity}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Địa chỉ</FormLabel>
                  <Input
                    name="address"
                    value={address}
                    onChange={onChangeHandleAddress}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Đặc sản</FormLabel>
                  <Input
                    name="type"
                    value={type}
                    onChange={onChangeHandleType}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá thấp nhất</FormLabel>
                  <Input
                    name="priceFrom"
                    value={priceFrom}
                    onChange={onChangeHandlePriceFrom}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá cao nhất</FormLabel>
                  <Input
                    name="priceTo"
                    value={priceTo}
                    onChange={onChangeHandlePriceTo}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Tổng số bàn</FormLabel>
                  <Input
                    name="totalTables"
                    value={totalTables}
                    onChange={onChangeHandleTotalTables}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Phí phụ thu</FormLabel>
                  <Input
                    name="fee"
                    value={fee}
                    onChange={onChangeHandleFee}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Hình ảnh</FormLabel>
                  <Textarea
                    name="images"
                    value={images}
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
