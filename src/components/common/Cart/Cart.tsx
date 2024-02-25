import { Box, Text } from "@chakra-ui/react";
import { useUnit } from "effector-react";
import { $cart } from "store/cart";

export const Cart = () => {
  const { totalPrices } = useUnit($cart);
  const isPriceExist = totalPrices > 0;

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
        {!isPriceExist ? "Корзина пуста, добавьте что-нибудь..." : "Итого:"}
      </Text>
      <Text fontSize="4xl" fontWeight="bold" color="#fff">
        {totalPrices} ₽
      </Text>
    </Box>
  );
};
