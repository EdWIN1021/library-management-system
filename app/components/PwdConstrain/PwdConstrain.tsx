"use client";
import React, { useEffect, useMemo } from "react";
import styles from "./styles.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { PwdConstrainProps } from "./type";
import usePwdValidator from "@/app/hooks/usePwdValidator";

const PwdConstrain: React.FC<PwdConstrainProps> = ({
  showConstrain,
  password,
  setIsValid,
}) => {
  const {
    isProperLength,
    hasUpperCase,
    hasLowerCase,
    hasNumericChar,
    hasSpecicalChar,
  } = usePwdValidator(password);

  const isValidPwd = useMemo(
    () =>
      isProperLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumericChar &&
      hasSpecicalChar,
    [
      isProperLength,
      hasUpperCase,
      hasLowerCase,
      hasNumericChar,
      hasSpecicalChar,
    ]
  );

  useEffect(() => {
    setIsValid(isValidPwd);
  }, [isValidPwd]);

  return (
    <>
      {showConstrain && (
        <div className={styles.constrains}>
          <ul>
            <li>
              {isProperLength ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              Between 8 and 20 characters
            </li>
            <li>
              {hasUpperCase ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 upper case letter
            </li>
            <li>
              {hasLowerCase ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 lower case letter
            </li>

            <li>
              {hasNumericChar ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 numerical number
            </li>
            <li>
              {hasSpecicalChar ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 special character
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PwdConstrain;
