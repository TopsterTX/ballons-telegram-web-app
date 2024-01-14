import { Dispatch, SetStateAction } from "react";

export type SearchInputProps = {
  onSettingsClick?: () => void;
  setTags?: Dispatch<SetStateAction<string[]>>;
};
