import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { CustomButton } from "components/ui";

export const CustomCard = () => {
  return (
    <Card
      shadow="lg"
      border="1px solid"
      borderColor="gray.200"
      alignItems="center"
    >
      <CardHeader></CardHeader>
      <CardBody>
        <img
          src="./assets/img/360_F_468334003_nsdFFVv3gGnDs2HDWph66fEpeVsiDtHl.jpg"
          alt=""
          width={110}
        />
      </CardBody>
      <CustomButton width="100%" borderTopRadius={0}>
        Заказать
      </CustomButton>
    </Card>
  );
};
