"use client";

import React, { useEffect, useMemo } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import usePwdValidator from "@/hooks/usePwdValidator";

interface PwdConstrainProps {
  showConstrain: boolean;
  password: string;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

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
        <div className="text-sm my-5">
          <ul>
            <li className="flex gap-2 items-center">
              {isProperLength ? (
                <CheckIcon className="text-[#ff8a00]" />
              ) : (
                <ClearIcon className="text-[#f34040]" />
              )}
              Between 8 and 20 characters
            </li>

            <li className="flex gap-2 items-center">
              {hasUpperCase ? (
                <CheckIcon className="text-[#ff8a00]" />
              ) : (
                <ClearIcon className="text-[#f34040]" />
              )}
              1 upper case letter
            </li>

            <li className="flex gap-2 items-center">
              {hasLowerCase ? (
                <CheckIcon className="text-[#ff8a00]" />
              ) : (
                <ClearIcon className="text-[#f34040]" />
              )}
              1 lower case letter
            </li>

            <li className="flex gap-2 items-center">
              {hasNumericChar ? (
                <CheckIcon className="text-[#ff8a00]" />
              ) : (
                <ClearIcon className="text-[#f34040]" />
              )}
              1 numerical number
            </li>

            <li className="flex gap-2 items-center">
              {hasSpecicalChar ? (
                <CheckIcon className="text-[#ff8a00]" />
              ) : (
                <ClearIcon className="text-[#f34040]" />
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
