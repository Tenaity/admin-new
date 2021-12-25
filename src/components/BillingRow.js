import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/react";
function BillingRow(props) {
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const {
    checkIn,
    checkOut,
    additionalFee,
    service,
    total,
    billId,
    status,
    name,
  } = props;
  let dateCheckIn = new Date(checkIn);
  let dateCheckOut = new Date(checkOut);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const toast = useToast();
  const onHandleDelete = async () => {
    try {
      const option = {
        method: "delete",
        url: `https://pbl6-travelapp.herokuapp.com/bill/${userId}/${billId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      if (response.status === 204) {
        toast({
          render: () => (
            <Alert status="success" variant="left-accent">
              <AlertIcon />
              Xoá hoá đơn thành công!
            </Alert>
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {service === "hotel" && (
        <Box p="24px" bg={bgColor} mb="22px" borderRadius="12px">
          <Flex justify="space-between" w="100%">
            <Link to={"/invoice/" + `${billId}`}>
              <Flex direction="column" maxWidth="100%">
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Dịch vụ:
                  <Text as="span" color="gray.500" ml="1">
                    Đặt phòng khách sạn
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Mã hoá đơn:
                  <Text as="span" color="gray.500" ml="1">
                    {billId}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Tên khách sạn:
                  <Text as="span" color="gray.500" ml="1">
                    {name || ""}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Đặt phòng:
                  <Text as="span" color="gray.500" ml="1">
                    {`${dateCheckIn.getDate()}/${
                      dateCheckIn.getMonth() + 1
                    }/${dateCheckIn.getFullYear()}`}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Trả phòng:
                  <Text as="span" color="gray.500" ml="1">
                    {`${dateCheckOut.getDate()}/${
                      dateCheckOut.getMonth() + 1
                    }/${dateCheckOut.getFullYear()}`}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Phụ phí:
                  <Text as="span" color="gray.500" ml="1">
                    {additionalFee}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Thành tiền:
                  <Text as="span" color="gray.500" ml="1">
                    {total}$
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Tình trạng:
                  <Text as="span" color="gray.500" ml="1">
                    {status ? "Đã thanh toán" : "Chưa thanh toán"}
                  </Text>
                </Text>
              </Flex>
            </Link>
            <Flex direction={{ sm: "column", md: "row" }} align="flex-start">
              <Button
                p="0px"
                bg="transparent"
                mb={{ sm: "10px", md: "0px" }}
                me={{ md: "12px" }}
                onClick={onHandleDelete}
              >
                <Flex color="red.500" cursor="pointer" align="center" p="12px">
                  <Icon as={FaTrashAlt} me="4px" />
                  <Text fontSize="sm" fontWeight="semibold">
                    DELETE
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
      {service === "restaurant" && (
        <Box p="24px" bg={bgColor} mb="22px" borderRadius="12px">
          <Flex justify="space-between" w="100%">
            <Link to={"/invoice/" + `${billId}`}>
              <Flex direction="column" maxWidth="100%">
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Dịch vụ:
                  <Text as="span" color="gray.500" ml="1">
                    Đặt bàn nhà hàng
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Mã hoá đơn:
                  <Text as="span" color="gray.500" ml="1">
                    {billId}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Tên nhà hàng:
                  <Text as="span" color="gray.500" ml="1">
                    {name || ""}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Ngày đặt:
                  <Text as="span" color="gray.500" ml="1">
                    {`${dateCheckIn.getDate()}/${
                      dateCheckIn.getMonth() + 1
                    }/${dateCheckIn.getFullYear()}`}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Thành tiền:
                  <Text as="span" color="gray.500" ml="1">
                    {total}$
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Tình trạng:
                  <Text as="span" color="gray.500" ml="1">
                    {status ? "Đã thanh toán" : "Chưa thanh toán"}
                  </Text>
                </Text>
              </Flex>
            </Link>
            <Flex direction={{ sm: "column", md: "row" }} align="flex-start">
              <Button
                p="0px"
                bg="transparent"
                mb={{ sm: "10px", md: "0px" }}
                me={{ md: "12px" }}
                onClick={onHandleDelete}
              >
                <Flex color="red.500" cursor="pointer" align="center" p="12px">
                  <Icon as={FaTrashAlt} me="4px" />
                  <Text fontSize="sm" fontWeight="semibold">
                    DELETE
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
      {service === "selfVehicle" && (
        <Box p="24px" bg={bgColor} mb="22px" borderRadius="12px">
          <Flex justify="space-between" w="100%">
            <Link to={"/invoice/" + `${billId}`}>
              <Flex direction="column" maxWidth="100%">
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Dịch vụ:
                  <Text as="span" color="gray.500" ml="1">
                    Thuê xe tự lái
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Mã hoá đơn:
                  <Text as="span" color="gray.500" ml="1">
                    {billId}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Dịch vụ cho thuê:
                  <Text as="span" color="gray.500" ml="1">
                    {name || ""}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Ngày đặt:
                  <Text as="span" color="gray.500" ml="1">
                    {`${dateCheckIn.getDate()}/${
                      dateCheckIn.getMonth() + 1
                    }/${dateCheckIn.getFullYear()}`}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Ngày trả:
                  <Text as="span" color="gray.500" ml="1">
                    {`${dateCheckOut.getDate()}/${
                      dateCheckOut.getMonth() + 1
                    }/${dateCheckOut.getFullYear()}`}
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Thành tiền:
                  <Text as="span" color="gray.500" ml="1">
                    {total}$
                  </Text>
                </Text>
                <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                  Tình trạng:
                  <Text as="span" color="gray.500" ml="1">
                    {status ? "Đã thanh toán" : "Chưa thanh toán"}
                  </Text>
                </Text>
              </Flex>
            </Link>
            <Flex direction={{ sm: "column", md: "row" }} align="flex-start">
              <Button
                p="0px"
                bg="transparent"
                mb={{ sm: "10px", md: "0px" }}
                me={{ md: "12px" }}
                onClick={onHandleDelete}
              >
                <Flex color="red.500" cursor="pointer" align="center" p="12px">
                  <Icon as={FaTrashAlt} me="4px" />
                  <Text fontSize="sm" fontWeight="semibold">
                    DELETE
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default BillingRow;
