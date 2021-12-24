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
import useSWR from "swr";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function EditHotel() {
  const toast = useToast();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const user = state?.user;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [totalRooms, setTotalRooms] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [images, setImages] = useState([]);
  const onChangeHandleName = (e) => {
    setName(e.target.value);
  };
  const onChangeHandleCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeHandleAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangeHandleTotalRooms = (e) => {
    setTotalRooms(e.target.value);
  };
  const onChangeHandleImages = (e) => {
    setImages(e.target.value);
  };
  const onChangeHandlePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeHandlePriceFrom = (e) => {
    setPriceFrom(e.target.value);
  };
  const onChangeHandlePriceTo = (e) => {
    setPriceTo(e.target.value);
  };
  useEffect(async () => {
    let response = await axios({
      method: "get",
      url: `https://pbl6-travelapp.herokuapp.com/hotel/${id}/detail`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    setImages(data.images);
    setName(data.name);
    setPhone(data.phone);
    setPriceFrom(data.priceFrom);
    setPriceTo(data.priceTo);
    setAddress(data.address);
    setTotalRooms(data.totalRooms);
    setCity(data.city);
    console.log("aaa", response.data);
  }, []);

  const onSubmitHandle = async (e) => {
    console.log("dataaa", {
      name: name,
      idUser: userId,
      city: city,
      address: address,
      phone: phone,
      totalRooms: totalRooms,
      availableRooms: 50,
      imageCover: "#",
      images: [],
      priceFrom: priceFrom,
      priceTo: priceTo,
    });
    if (user) {
      const totalRoomsNew = parseInt(totalRooms);
      console.log(token);
      try {
        e.preventDefault();
        const option = {
          method: "patch",
          url: `https://pbl6-travelapp.herokuapp.com/hotel/${id}/detail`,
          data: {
            name: name,
            idUser: userId,
            city: city,
            address: address,
            phone: phone,
            totalRooms: totalRoomsNew,
            availableRooms: 50,
            imageCover: "#",
            images: [],
            priceFrom: priceFrom,
            priceTo: priceTo,
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
                Cập nhật khách sạn thành công!
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
            Chỉnh sửa khách sạn
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>Tên khách sạn</FormLabel>
                  <Input
                    name="name"
                    defaultValue={name}
                    onChange={onChangeHandleName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Thành phố</FormLabel>
                  <Input
                    name="city"
                    defaultValue={city}
                    onChange={onChangeHandleCity}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Địa chỉ</FormLabel>
                  <Input
                    name="address"
                    defaultValue={address}
                    onChange={onChangeHandleAddress}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Số điện thoại</FormLabel>
                  <Input
                    name="phone"
                    defaultValue={phone}
                    onChange={onChangeHandlePhone}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá thấp nhất</FormLabel>
                  <Input
                    name="priceFrom"
                    defaultValue={priceFrom}
                    onChange={onChangeHandlePriceFrom}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Giá cao nhất</FormLabel>
                  <Input
                    name="totalRooms"
                    defaultValue={priceTo}
                    onChange={onChangeHandlePriceTo}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Tổng số phòng</FormLabel>
                  <Input
                    name="totalRooms"
                    defaultValue={totalRooms}
                    onChange={onChangeHandleTotalRooms}
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
