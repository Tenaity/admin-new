import React from "react";
import { Flex, Card, Text, CardHeader, CardBody } from "@chakra-ui/react";
import BillingRow from "./BillingRow";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
function Billing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const billingData = [
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      number: "FRB1235476",
    },
    {
      name: "Lucas Harper",
      company: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      number: "FRB1235476",
    },
    {
      name: "Ethan James",
      company: "Fiber Notion",
      email: "ethan@fiber.com",
      number: "FRB1235476",
    },
  ];
  return (
    <>
      <Button
        variant="ghost"
        scale="1"
        transform="auto"
        _hover={{
          color: "green.500",
          scale: "1.2",
        }}
        ref={btnRef}
        onClick={onOpen}
      >
        Bill
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>List Bills</DrawerHeader>

          <DrawerBody>
            <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
              <Flex direction="column">
                <CardHeader py="12px">
                  <Text fontSize="lg" fontWeight="bold">
                    Billing Information
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex direction="column" w="100%">
                    {billingData.map((row, index) => {
                      return (
                        <BillingRow
                          name={row.name}
                          company={row.company}
                          email={row.email}
                          number={row.number}
                          key={index}
                        />
                      );
                    })}
                  </Flex>
                </CardBody>
              </Flex>
            </Card>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Billing;
