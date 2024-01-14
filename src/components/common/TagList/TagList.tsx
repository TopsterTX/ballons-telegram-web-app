import { Box, Stack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { TagListProps } from "./TagList.types";

export const TagList = ({ tags, setTags }: TagListProps) => {
  const removeTag = (removeInd: number) => () => {
    setTags((arr) => arr.filter((_, ind) => removeInd !== ind));
  };

  return (
    <Box mb={5}>
      <Stack shouldWrapChildren direction="row" wrap="wrap" gap={3}>
        {tags.map((val, ind) => {
          return (
            <Tag key={val} size="md">
              <TagLabel>{val}</TagLabel>
              <TagCloseButton onClick={removeTag(ind)} />
            </Tag>
          );
        })}
      </Stack>
    </Box>
  );
};
