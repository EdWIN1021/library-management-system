"use client";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

interface InputProps {
  lable?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <FormControl>
      <label className="my-2" htmlFor={props.lable}>
        {props.lable}
      </label>
      <TextField
        {...props}
        required
        size="small"
        id={props.lable}
        variant="outlined"
      />
    </FormControl>
  );
};

export default Input;
