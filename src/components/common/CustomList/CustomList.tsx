import { List, ListItem } from "@chakra-ui/react";
import { CustomCard } from "components/ui";
import { CustomListProps } from "./CustomList.types.ts";

export const CustomList = ({ items, ...listProps }: CustomListProps) => {
  return (
    <List {...listProps}>
      {items.map((val) => (
        <ListItem>
          <CustomCard />
        </ListItem>
      ))}
    </List>
  );
};
