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

export default function EditRestaurant() {
  const toast = useToast();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const user = state?.user;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [totalTables, setTotalTables] = useState("");
  const [availableTables, setAvailableTables] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [images, setImages] = useState([]);
  const [type, setType] = useState("");
  const history = useHistory();

  const onChangeHandleName = (e) => {
    setName(e.target.value);
  };
  const onChangeHandleCity = (e) => {
    setCity(e.target.value);
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
  const onChangeHandleAvailableTables = (e) => {
    setAvailableTables(e.target.value);
  };
  const onChangeHandlePriceFrom = (e) => {
    setPriceFrom(e.target.value);
  };
  const onChangeHandlePriceTo = (e) => {
    setPriceTo(e.target.value);
  };
  const onChangeHandleType = (e) => {
    setType(e.target.value);
  };
  useEffect(async () => {
    let response = await axios({
      method: "get",
      url: `https://pbl6-travelapp.herokuapp.com/restaurant/${id}/detail`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    setImages(data.images);
    setName(data.name);
    setPriceFrom(data.priceFrom);
    setPriceTo(data.priceTo);
    setAddress(data.address);
    setTotalTables(data.totalTables);
    setAvailableTables(data.availableTables);
    setCity(data.city);
    setType(data.type);
  }, []);

  const onSubmitHandle = async (e) => {
    if (user) {
      try {
        e.preventDefault();
        const option = {
          method: "patch",
          url: `https://pbl6-travelapp.herokuapp.com/restaurant/${id}/detail`,
          data: {
            name: name,
            idUser: userId,
            city: city,
            address: address,
            totalTables: Number(totalTables),
            availableTables: Number(availableTables),
            imageCover: "#",
            images: images,
            priceFrom: Number(priceFrom),
            priceTo: Number(priceTo),
            type: type,
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
                C???p nh???t nh?? h??ng th??nh c??ng!
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
            Ch???nh s???a nh?? h??ng
          </Heading>
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p="24px">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl>
                  <FormLabel mb={1}>T??n nh?? h??ng</FormLabel>
                  <Input
                    name="name"
                    defaultValue={name}
                    onChange={onChangeHandleName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Th??nh ph???</FormLabel>
                  <Input
                    name="city"
                    defaultValue={city}
                    onChange={onChangeHandleCity}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>?????a ch???</FormLabel>
                  <Input
                    name="address"
                    defaultValue={address}
                    onChange={onChangeHandleAddress}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>?????c s???n</FormLabel>
                  <Input
                    name="type"
                    defaultValue={type}
                    onChange={onChangeHandleType}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Gi?? th???p nh???t</FormLabel>
                  <Input
                    name="priceFrom"
                    defaultValue={priceFrom}
                    onChange={onChangeHandlePriceFrom}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>Gi?? cao nh???t</FormLabel>
                  <Input
                    name="totalRooms"
                    defaultValue={priceTo}
                    onChange={onChangeHandlePriceTo}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>T???ng s??? b??n</FormLabel>
                  <Input
                    name="totalTables"
                    defaultValue={totalTables}
                    onChange={onChangeHandleTotalTables}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel mb={1}>S??? b??n c??n tr???ng</FormLabel>
                  <Input
                    name="availableTables"
                    defaultValue={availableTables}
                    onChange={onChangeHandleAvailableTables}
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
