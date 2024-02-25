import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ConfirmModalProps } from "components/common/ConfirmModal/ConfirmModal.types.ts";
import { $cart } from "store/cart";
import { useUnit } from "effector-react";
import { Summary } from "components/common";

export const ConfirmModal = ({ isOpen, onClose }: ConfirmModalProps) => {
  const { totalPrices } = useUnit($cart);
  return (
    <Modal
      blockScrollOnMount
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Подтвердите заказ</ModalHeader>
        <ModalBody>
          <Box mb="10px">
            <Text>Итоговая стоимость:</Text>

            <Text color="blue.600" fontSize="3xl">
              {totalPrices} ₽
            </Text>
            <Text fontSize="small">
              Оплата картой или наличными, при получении
            </Text>
          </Box>
          <Box mb="15px">
            <Summary isOpen />
          </Box>
          <Box>
            <Text fontSize="large" fontWeight="bold">
              После подтверждения заказа с вами свяжутся по уточнению сроков
              выполнения заказа
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Подтвердить заказ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
