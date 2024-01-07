import { Button } from "@chakra-ui/react";
import { CustomButtonProps } from "./CustomButton.types.ts";

export const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <Button className="custom-button" {...rest}>
      {children}
    </Button>
  );
};
