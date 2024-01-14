import { Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import { CustomCard } from "components/ui";
import { CustomListProps } from "./CustomList.types.ts";

export const CustomList = ({ items, ...listProps }: CustomListProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {items.map((val) => (
        <GridItem w="100%" key={val}>
          <CustomCard />
        </GridItem>
      ))}
    </Grid>
  );
};
