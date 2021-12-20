import {
  GridItem,
  Text,
  Badge,
  Flex,
  Spacer,
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
const SearchItem = ({ item }) => {
  return (
    <Link to={"/hotel/" + `${item.id}`}>
      <GridItem as={LinkBox}>
        <Flex>
          <Box>
            <AiOutlineShop
              style={{ display: "inline-block", marginLeft: -3 }}
            />
            <Heading
              as={Text}
              mx={2}
              display="inline-block"
              color="gray.600"
              fontSize="xs"
              fontStyle="italic"
            >
              Loại dịch vụ
            </Heading>
            <Text fontSize="xs" display="inline-block">
              {item?.typeService}
            </Text>
            <LinkOverlay>
              <Heading size="xs" variant="gradient-brand">
                {item.name}
              </Heading>
            </LinkOverlay>
          </Box>
          <Spacer />

          <Box>
            <Badge mr={2} variant="subtle" size="sm">
              <Text>
                {item.priceFrom}$ - {item.priceTo}$
              </Text>
            </Badge>
          </Box>
        </Flex>
      </GridItem>
    </Link>
  );
};

export default SearchItem;
