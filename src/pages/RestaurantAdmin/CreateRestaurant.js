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
  const user = state?.user;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [totalTables, setTotalTables] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
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
            type: type,
            fee: 10,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(option);
        if (response.status === 201) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                T???o m???i nh?? h??ng th??nh c??ng!
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
            T???o m???i nh?? h??ng
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>T??n nh?? h??ng</FormLabel>
                  <Input
                    name="name"
                    value={name}
                    onChange={onChangeHandleName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Th??nh ph???</FormLabel>
                  <Input
                    name="city"
                    value={city}
                    onChange={onChangeHandleCity}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>?????a ch???</FormLabel>
                  <Input
                    name="address"
                    value={address}
                    onChange={onChangeHandleAddress}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>?????c s???n</FormLabel>
                  <Input
                    name="type"
                    value={type}
                    onChange={onChangeHandleType}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Gi?? th???p nh???t</FormLabel>
                  <Input
                    name="priceFrom"
                    value={priceFrom}
                    onChange={onChangeHandlePriceFrom}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Gi?? cao nh???t</FormLabel>
                  <Input
                    name="priceTo"
                    value={priceTo}
                    onChange={onChangeHandlePriceTo}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>T???ng s??? b??n</FormLabel>
                  <Input
                    name="totalTables"
                    value={totalTables}
                    onChange={onChangeHandleTotalTables}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>H??nh ???nh</FormLabel>
                  <Textarea
                    name="images"
                    value={images}
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
