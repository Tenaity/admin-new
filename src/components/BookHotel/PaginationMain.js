import React from "react";
import { Flex } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const PaginationMain = () => {
  const [current, setCurrent] = React.useState(3);
  return (
    <Flex w="full" p={50} alignItems="center" justifyContent="center">
      <Pagination
        defaultCurrent={1}
        total={50}
        colorScheme={"green"}
        paginationProps={{ display: "flex" }}
        current={current}
        onChange={(page) => setCurrent(page)}
      />
    </Flex>
  );
};

export default PaginationMain;
