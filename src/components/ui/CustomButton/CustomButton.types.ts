import { ReactNode } from "react";
import { ButtonProps } from "@chakra-ui/react";

export type CustomButtonProps = ButtonProps & {
  children: ReactNode;
};
