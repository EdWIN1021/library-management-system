import { useMemo } from "react";

const usePwdValidator = (password: string) => {
  const isProperLength = useMemo(
    () => password?.length >= 8 && password?.length <= 20,
    [password]
  );

  const hasUpperCase = useMemo(
    () => password?.split("").some((c) => c === c.toUpperCase()),
    [password]
  );

  const hasLowerCase = useMemo(
    () => password?.split("").some((c) => c === c.toLowerCase()),
    [password]
  );

  const hasNumericChar = useMemo(
    () => password?.split("").some((c) => !isNaN(parseInt(c))),
    [password]
  );

  const hasSpecicalChar = useMemo(
    () => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password),
    [password]
  );

  return {
    isProperLength,
    hasUpperCase,
    hasLowerCase,
    hasNumericChar,
    hasSpecicalChar,
  };
};

export default usePwdValidator;
