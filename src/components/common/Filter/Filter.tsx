import { Box, FormLabel, Select, Stack } from "@chakra-ui/react";
import { BalloonTypes } from "./BalloonTypes/BalloonTypes";

export const Filter = () => {
  return (
    <Box w="100%" bg="telegram.500" shadow="lg" rounded="lg" mb={6} p={5}>
      <Stack spacing={5}>
        <BalloonTypes />
        <Stack>
          <Select bgColor="#fff" id="color-select">
            <option hidden disabled value="">
              Цвет
            </option>
            <option value="Красные">Красные</option>
          </Select>
        </Stack>
      </Stack>
    </Box>
  );
};
