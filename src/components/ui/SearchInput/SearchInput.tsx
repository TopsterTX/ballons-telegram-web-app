import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import { SearchInputProps } from "./SearchInput.types";

export const SearchInput = ({ onSettingsClick, setTags }: SearchInputProps) => {
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler = (event) =>
    // @ts-ignore
    setValue(event.target.value);

  const addTag: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if ((event.code === "Enter" || event.key === "Enter") && value) {
      setTags?.((arr) => [...arr, value]);
      setValue("");
    }
  };

  return (
    <Box mb={5}>
      <InputGroup mb={2}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="telegram.300" />
        </InputLeftElement>
        <Input
          type="text"
          value={value}
          placeholder="Найти шары..."
          focusBorderColor="telegram.300"
          onKeyDown={addTag}
          onChange={handleChange}
        />
        <InputRightElement>
          <SettingsIcon color="telegram.600" onClick={onSettingsClick} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
