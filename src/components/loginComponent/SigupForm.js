import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";
import PasswordField from "./PasswordField";
import { useForm } from "react-hook-form";
const SigupForm = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="4">
        <FormControl id="email">
          <FormLabel mb={1}>Email</FormLabel>
          <Input
            type="email"
            autoComplete="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
        </FormControl>
        <PasswordField />
        <Button type="submit" colorScheme="green" size="lg" fontSize="md">
          Create my account
        </Button>
      </Stack>
    </form>
  );
};

export default SigupForm;
