import { Box, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { CartProductProps } from "./CartProduct.types.ts";

export const CartProduct = ({ balloon, onRemoveClick }: CartProductProps) => {
  const { name, price } = balloon;
  const onClickHandler = () => {
    onRemoveClick(balloon);
  };

  return (
    <Box
      flexDirection="row"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box flexDirection="row" display="flex" gap="10px">
        <Text width="100px">{name}</Text>
        <Text>{price} ₽</Text>
      </Box>
      <IconButton
        aria-label="remove-product"
        color="red.500"
        size="sm"
        onClick={onClickHandler}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
