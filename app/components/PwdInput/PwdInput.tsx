"use client";
import FormControl from "@mui/material/FormControl";
import styles from "./styles.module.scss";
import { PwdInputProps } from "./type";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PwdInput: React.FC<PwdInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
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
  );
};

export default PwdInput;
