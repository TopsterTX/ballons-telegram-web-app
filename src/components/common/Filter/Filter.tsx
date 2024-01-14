import { Box, FormLabel, Select, Stack } from "@chakra-ui/react";
import { BalloonTypes } from "./BalloonTypes/BalloonTypes";

export const Filter = () => {
  return (
    <Box
      w="100%"
      bg="telegram.500"
      shadow="lg"
      rounded="lg"
      mb={6}
      p="12px 20px"
    >
      <Stack spacing={3}>
        <BalloonTypes />
        <Stack>
          <FormLabel htmlFor="color-select">Цвет</FormLabel>
          <Select bgColor="#fff" id="color-select">
            <option value="Красные">Красные</option>
          </Select>
        </Stack>
      </Stack>
    </Box>
  );
};
