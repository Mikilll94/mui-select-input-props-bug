import { Select } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

interface CustomSelectProps<Value> {
  onChange: SelectInputProps<Value>["onChange"];
}

export const CustomSelect = <Value,>({
  onChange,
}: CustomSelectProps<Value>) => {
  return <Select onChange={onChange} />;
};
