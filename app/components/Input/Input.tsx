import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { InputProps } from "./type";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./styles.module.scss";

const Input: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      {props.type === "text" ? (
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
      ) : (
        <FormControl>
          <label className={styles.label} htmlFor={props.lable}>
            {props.lable}
          </label>
          <OutlinedInput
            {...props}
            style={{ width: "300px" }}
            size="small"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}
    </>
  );
};

export default Input;

{
}
