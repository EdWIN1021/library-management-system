"use client";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { InputProps } from "./type";
import styles from "./styles.module.scss";

const Input: React.FC<InputProps> = (props) => {
  return (
    <FormControl>
      <label className={styles.label} htmlFor={props.lable}>
        {props.lable}
      </label>
      <TextField
        {...props}
        style={{ width: "300px" }}
        size="small"
        id={props.lable}
        variant="outlined"
      />
    </FormControl>
  );
};

export default Input;

{
}
