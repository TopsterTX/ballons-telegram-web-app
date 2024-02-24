import { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProductCard } from "components/ui";
import { useUnit } from "effector-react";
import {
  $balloons,
  fetchBalloonsFx,
  loadBalloonsClicked,
} from "src/store/balloons";
import { addProduct } from "store/cart";
import { OnButtonClick } from "components/ui/ProductCard/ProductCard.types.ts";
import { CustomSkeleton } from "components/common";

export const ProductList = () => {
  const [balloons] = useUnit([$balloons, fetchBalloonsFx.pending]);
  const handleUserLoad = useUnit(loadBalloonsClicked);
  const pending = false;

  const onButtonClick: OnButtonClick = (balloon) => {
    addProduct(balloon);
  };

  useEffect(() => {
    handleUserLoad();
  }, []);

  if (pending) {
    return <CustomSkeleton count={4} />;
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
      {Boolean(balloons.length) &&
        balloons.map((balloon) => (
          <GridItem w="100%" key={balloon.id}>
            <ProductCard balloon={balloon} onButtonClick={onButtonClick} />
          </GridItem>
        ))}
    </Grid>
  );
};
