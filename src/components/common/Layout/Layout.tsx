import { Container } from "@chakra-ui/react";
import { CustomLayoutProps } from "./Layout.types.ts";

export const Layout = ({ children, ...containerProps }: CustomLayoutProps) => {
  return <Container {...containerProps}>{children}</Container>;
};
