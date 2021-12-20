import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import SearchItem from "./SearchItem";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
export default function SearchModal({ loading, onChange, searchItem = [] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" onClick={onOpen} placeholder="Search" />
      </InputGroup>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader p={2}>
            <InputGroup variant="flushed" colorScheme="brand">
              <InputLeftElement
                pointerEvents="none"
                children={
                  loading ? (
                    <Spinner colorScheme="brand" />
                  ) : (
                    <Search2Icon color="gray.300" />
                  )
                }
              />
              <Input colorScheme="brand" type="search" onChange={onChange} />
            </InputGroup>
          </ModalHeader>
          <ModalBody>
            {searchItem &&
              searchItem.map((item) => {
                return <SearchItem item={item} />;
              })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
