import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { HiCloudUpload } from "react-icons/hi";
import { CurrencySelect } from "./CurrencySelect";
import { LanguageSelect } from "./LanguageSelect";

const AccountSettings = () => {
  return (
    <Box px="16" py="16" maxWidth="3xl" mx="auto" mt="5" mb="10" shadow="lg">
      <form
        id="settings-form"
        onSubmit={(e) => {
          e.preventDefault();
          // form submit logic
        }}
      >
        <Stack spacing="4" divider={<StackDivider />}>
          <Heading size="lg" as="h1" paddingBottom="4">
            Account Settings
          </Heading>
          <VStack width="full" spacing="6">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" maxLength={255} />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" isReadOnly value="joe@chakra-ui.com" />
            </FormControl>

            <FormControl id="bio">
              <FormLabel>Bio</FormLabel>
              <Textarea rows={5} />
              <FormHelperText>
                Brief description for your profile. URLs are hyperlinked.
              </FormHelperText>
            </FormControl>
          </VStack>
          <Stack direction="row" spacing="6" align="center" width="full">
            <Avatar
              size="xl"
              name="Alyssa Mall"
              src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
            <Box>
              <HStack spacing="5">
                <Button leftIcon={<HiCloudUpload />}>Change photo</Button>
                <Button variant="ghost" colorScheme="red">
                  Delete
                </Button>
              </HStack>
              <Text
                fontSize="sm"
                mt="3"
                color={useColorModeValue("gray.500", "whiteAlpha.600")}
              >
                .jpg, .gif, or .png. Max file size 700K.
              </Text>
            </Box>
          </Stack>
          <VStack width="full" spacing="6">
            <LanguageSelect />
            <CurrencySelect />
          </VStack>
          <Stack width="full" spacing="4" align="end">
            <HStack width="full">
              <Button type="submit" colorScheme="green">
                Save Changes
              </Button>
              <Button variant="outline">Cancel</Button>
            </HStack>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default AccountSettings;
