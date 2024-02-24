import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { CartProduct } from "components/common/Cart/CartProduct/CartProduct.tsx";
import { useUnit } from "effector-react";
import { $cart, removeProduct } from "store/cart";
import { useCallback } from "react";
import { Balloon } from "models/balloon.ts";

export const Summary = ({ isOpen = false }) => {
  const { products } = useUnit($cart);

  const onRemoveProductHandler = useCallback((product: Balloon) => {
    removeProduct(product);
  }, []);

  return (
    <Box>
      <Accordion allowToggle defaultIndex={isOpen ? 0 : undefined}>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="h2" flex="1" textAlign="left">
                Товары в корзине
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={2}>
            <Box gap="10px">
              {Boolean(products.length) &&
                products.map((product) => (
                  <CartProduct
                    key={product.id}
                    onRemoveClick={onRemoveProductHandler}
                    balloon={product}
                  />
                ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
