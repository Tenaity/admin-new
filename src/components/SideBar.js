import {
  Box,
  Collapse,
  Flex,
  Heading,
  Icon,
  Image,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IoBedOutline,
  IoCarSportOutline,
  IoPeopleOutline,
  IoRestaurantOutline,
} from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import gogo from "../assets/img/logo2.png";
import { Link } from "react-router-dom";
export default function SideBar({ user }) {
  const hotel = useDisclosure();
  const restaurant = useDisclosure();
  const selfVehicle = useDisclosure();
  const userManager = useDisclosure();
  const { userName } = user || "";
  const NavItem = (props) => {
    const { icon, children, url, ...rest } = props;
    return (
      <>
        {url ? (
          <Link to={"/" + `${url}`}>
            <Flex
              align="center"
              px="4"
              pl="4"
              py="3"
              cursor="pointer"
              color="inherit"
              _hover={{
                bg: "gray.100",
                color: "gray.900",
              }}
              role="group"
              fontWeight="semibold"
              transition=".15s ease"
              {...rest}
            >
              {icon && (
                <Icon
                  mx="2"
                  boxSize="4"
                  _groupHover={{
                    color: "gray.600",
                  }}
                  as={icon}
                />
              )}
              {children}
            </Flex>
          </Link>
        ) : (
          <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color="inherit"
            _hover={{
              bg: "gray.100",
              color: "gray.900",
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}
          >
            {icon && (
              <Icon
                mx="2"
                boxSize="4"
                _groupHover={{
                  color: "gray.600",
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        )}
      </>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Image ml="40px" src={gogo} h="50px" maxW="120px" />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={IoBedOutline} onClick={hotel.onToggle}>
          D???ch v??? kh??ch s???n
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={hotel.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={hotel.isOpen}>
          <NavItem pl="12" py="2" url="hoteladmin/list">
            Danh s??ch kh??ch s???n
          </NavItem>
          <NavItem pl="12" py="2" url="hoteladmin/new">
            Th??m m???i kh??ch s???n
          </NavItem>
        </Collapse>
        <NavItem icon={IoRestaurantOutline} onClick={restaurant.onToggle}>
          D???ch v??? nh?? h??ng
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={restaurant.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={restaurant.isOpen}>
          <NavItem pl="12" py="2" url="restaurantAdmin/list">
            Danh s??ch nh?? h??ng
          </NavItem>
          <NavItem pl="12" py="2" url="restaurantAdmin/new">
            Th??m m???i nh?? h??ng
          </NavItem>
        </Collapse>
        <NavItem icon={IoCarSportOutline} onClick={selfVehicle.onToggle}>
          D???ch v??? thu?? xe
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={selfVehicle.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={selfVehicle.isOpen}>
          <NavItem pl="12" py="2" url="selfVehicleAdmin/list">
            Danh s??ch xe cho thu??
          </NavItem>
          <NavItem pl="12" py="2" url="selfVehicleAdmin/new">
            Th??m m???i xe cho thu??
          </NavItem>
        </Collapse>
        {userName === "admin" && (
          <>
            <NavItem icon={IoPeopleOutline} onClick={userManager.onToggle}>
              Qu???n l?? ng?????i d??ng
              <Icon
                as={MdKeyboardArrowRight}
                ml="auto"
                transform={userManager.isOpen && "rotate(90deg)"}
              />
            </NavItem>
            <Collapse in={userManager.isOpen}>
              <NavItem pl="12" py="2" url="users/list">
                Danh s??ch ng?????i d??ng
              </NavItem>
            </Collapse>
          </>
        )}
      </Flex>
    </Box>
  );
  return <SidebarContent />;
}
