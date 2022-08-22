import { BaseSyntheticEvent, FC, HTMLInputTypeAttribute } from "react";
import { Input, Label } from "../../../sign-up/sign-up.styles";

const TextInput: FC<{
  label: string;
  name: string;
  handleChange: (e: BaseSyntheticEvent) => void;
  min?: string | number | undefined;
  type?: HTMLInputTypeAttribute;
  error?: boolean;
}> = ({ label, name, type, min, handleChange, error = false }) => {
  return (
    <Label>
      {label}:
      <Input name={name} type={type} min={min} onChange={handleChange} data-testid={name} />
      <label style={{ color: "gray", fontSize: '12px', opacity: error ? '1' : '0' }} htmlFor="message">
        *Required field
      </label>
    </Label>
  );
};

export default TextInput;