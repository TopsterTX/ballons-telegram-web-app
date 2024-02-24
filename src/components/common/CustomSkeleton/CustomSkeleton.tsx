import { Grid, Skeleton } from "@chakra-ui/react";
import { CustomSkeletonProps } from "./CustomSkeleton.types.ts";

export const CustomSkeleton = ({ count }: CustomSkeletonProps) => {
  console.log(Array(count));
  return (
    <Grid templateColumns="repeat(2, 1fr)" gridGap={5}>
      {Array(count)
        .fill(0)
        .map((_, ind) => {
          console.log({ ind });
          return <Skeleton height="250px" width="100%" fadeDuration={5} />;
        })}
    </Grid>
  );
};
