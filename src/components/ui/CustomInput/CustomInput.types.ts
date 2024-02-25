import { ChangeEventHandler } from "react";

export type CustomInputProps = {
  label: string;
  onChange: ChangeEventHandler;
  value?: string | number | readonly string[];
};
