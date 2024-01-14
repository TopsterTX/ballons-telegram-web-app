import { Button } from "@chakra-ui/react";
import { CustomButtonProps } from "./CustomButton.types.ts";

//   .button-13 {
//   background-color: #fff;
//   border: 1px solid #d5d9d9;
//   border-radius: 8px;
//   box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
//   box-sizing: border-box;
//   color: #0f1111;
//   cursor: pointer;
//   display: inline-block;
//   font-family: "Amazon Ember",sans-serif;
//   font-size: 13px;
//   line-height: 29px;
//   padding: 0 10px 0 11px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: middle;
//   width: 100px;
// }
//
// .button-13:hover {
//   background-color: #f7fafa;
// }
//
// .button-13:focus {
//   border-color: #008296;
//   box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
//   outline: 0;
// }

export const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <Button shadow="md" colorScheme="telegram" {...rest}>
      {children}
    </Button>
  );
};
