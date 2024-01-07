import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

export const CustomCard = () => {
  return (
    <Card>
      <CardHeader>
        <Heading>Heading</Heading>
      </CardHeader>
      <CardBody>
        <Text>Lorem ipsum dolor sit amen</Text>
      </CardBody>
      <CardFooter>
        <Text>Footer</Text>
      </CardFooter>
    </Card>
  );
};
