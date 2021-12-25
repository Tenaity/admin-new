import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
const BreadcrumbMain = ({ urls = [] }) => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      pt={5}
    >
      {urls.map((item, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink>
              <Link to="/">{item}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbMain;
