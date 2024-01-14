import { Box, Text } from "@chakra-ui/react";

export const Cart = () => {
  return (
    <Box
      bgColor="telegram.500"
      borderRadius="lg"
      shadow="lg"
      padding={3}
      mb={4}
      top="-40px"
      left={0}
      zIndex={1000}
      pos="sticky"
      className="cart"
    >
      <Text fontSize="md" color="#fff">
        Корзина пуста, добавьте что-нибудь...
      </Text>
      <Text fontSize="4xl" fontWeight="bold" color="#fff">
        0 ₽
      </Text>
    </Box>
  );
};
