import { ReactNode } from "react";
import { ContainerProps } from "@chakra-ui/react";

export type CustomLayoutProps = ContainerProps & {
  children: ReactNode;
};
