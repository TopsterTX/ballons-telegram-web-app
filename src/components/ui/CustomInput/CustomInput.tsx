import { Input, InputGroup } from "@chakra-ui/react";
import { CustomInputProps } from "./CustomInput.types.ts";

export const CustomInput = ({ label, onChange, value }: CustomInputProps) => {
  return (
    <InputGroup>
      <Input
        placeholder={label}
        focusBorderColor="telegram.300"
        onChange={onChange}
        value={value}
      />
    </InputGroup>
  );
};
