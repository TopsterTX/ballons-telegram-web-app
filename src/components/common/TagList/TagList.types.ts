import { Dispatch, SetStateAction } from "react";

export type TagListProps = {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
};
