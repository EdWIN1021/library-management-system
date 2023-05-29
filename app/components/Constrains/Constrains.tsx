"use client";
import React, { useEffect, useMemo } from "react";
import styles from "./styles.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { ConstrainsProps } from "./type";

const Constrains: React.FC<ConstrainsProps> = ({
  showConstrains,
  password,
  setIsValid,
}) => {
  const checkLength = useMemo(
    () => password?.length >= 8 && password?.length <= 20,
    [password]
  );

  const checkUpperCase = useMemo(
    () => password?.split("").some((c) => c === c.toUpperCase()),
    [password]
  );

  const checkLowerCase = useMemo(
    () => password?.split("").some((c) => c === c.toLowerCase()),
    [password]
  );

  const checkNumber = useMemo(
    () => password?.split("").some((c) => !isNaN(parseInt(c))),
    [password]
  );

  const checkSpecicalChar = useMemo(
    () => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password),
    [password]
  );

  const isValidPwd = useMemo(
    () =>
      checkUpperCase &&
      checkLowerCase &&
      checkNumber &&
      checkSpecicalChar &&
      checkLength,
    [
      checkUpperCase,
      checkLowerCase,
      checkNumber,
      checkSpecicalChar,
      checkLength,
    ]
  );

  useEffect(() => {
    setIsValid(isValidPwd);
  }, [isValidPwd]);

  return (
    <>
      {showConstrains && (
        <div className={styles.constrains}>
          <ul>
            <li>
              {password?.length >= 8 && password?.length <= 20 ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              Between 8 and 20 characters
            </li>
            <li>
              {checkUpperCase ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 upper case letter
            </li>
            <li>
              {checkLowerCase ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 lower case letter
            </li>

            <li>
              {checkNumber ? (
                <CheckIcon className={styles.check} />
              ) : (
                <ClearIcon className={styles.error} />
              )}
              1 numerical number
            </li>
            <li>
              {checkSpecicalChar ? (
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

export default Constrains;
