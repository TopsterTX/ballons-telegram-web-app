import { Box, Button, Heading, IconButton, Text } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { CustomButton } from "components/ui";
import { HeaderProps } from "./Header.types";

export const Header = ({}: HeaderProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={5}
      paddingTop={5}
    >
      <Heading>Balloons</Heading>
      <Box display="flex" gap={2} justifyContent="center">
        <Box display="flex" flexDirection="column" gap={1} flexShrink="end">
          <Text fontSize="xs">Позвоните нам</Text>
          <Button
            variant="link"
            onClick={() => window.open("tel:89883829938")}
            fontSize="xs"
            fontWeight="400"
            color="#000"
          >
            89883829938
          </Button>
        </Box>
        <IconButton
          variant="outline"
          aria-label="Позвонить в магазин"
          icon={<PhoneIcon />}
          onClick={() => window.open("tel:89883829938")}
        />
      </Box>
    </Box>
  );
};
