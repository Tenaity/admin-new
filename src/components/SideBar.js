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
  console.log(user);

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
          Dịch vụ khách sạn
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={hotel.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={hotel.isOpen}>
          <NavItem pl="12" py="2" url="hoteladmin/list">
            Danh sách khách sạn
          </NavItem>
          <NavItem pl="12" py="2" url="hoteladmin/new">
            Thêm mới khách sạn
          </NavItem>
        </Collapse>
        <NavItem icon={IoRestaurantOutline} onClick={restaurant.onToggle}>
          Dịch vụ nhà hàng
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={restaurant.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={restaurant.isOpen}>
          <NavItem pl="12" py="2" url="restaurantAdmin/list">
            Danh sách nhà hàng
          </NavItem>
          <NavItem pl="12" py="2" url="restaurantAdmin/new">
            Thêm mới nhà hàng
          </NavItem>
        </Collapse>
        <NavItem icon={IoCarSportOutline} onClick={selfVehicle.onToggle}>
          Dịch vụ thuê xe
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={selfVehicle.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={selfVehicle.isOpen}>
          <NavItem pl="12" py="2" url="selfVehicleAdmin/list">
            Danh sách xe cho thuê
          </NavItem>
          <NavItem pl="12" py="2" url="selfVehicleAdmin/new">
            Thêm mới xe cho thuê
          </NavItem>
        </Collapse>

        <NavItem icon={IoPeopleOutline} onClick={userManager.onToggle}>
          Quản lý người dùng
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={userManager.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={userManager.isOpen}>
          <NavItem pl="12" py="2" url="users/list">
            Danh sách người dùng
          </NavItem>
        </Collapse>
      </Flex>
    </Box>
  );
  return <SidebarContent />;
}
