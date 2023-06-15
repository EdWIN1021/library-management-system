"use client";

import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { uploadImage } from "@/app/lib/request";
import { User } from "@/app/types";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/navigation";

const ImageUploader = ({ user }: { user: User | null }) => {
  const [file, setFile] = useState<File | null>(null);
  const { email } = user as User;
  const inputRef = useRef(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: uploadImage,
  });

  const router = useRouter();

  const onUpload = async () => {
    if (file && email) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const imagefile = reader.result as string;
        await mutate(
          { imagefile, email },
          {
            onSuccess: (data) => {
              router.refresh();
            },
            onSettled: () => {
              console.log(inputRef.current);
              setFile(null);
            },
          }
        );
      };
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.upload}
        type="file"
        onChange={handleOnChange}
        ref={inputRef}
      />
      <LoadingButton onClick={onUpload} variant="contained" loading={isLoading}>
        upload
      </LoadingButton>
    </div>
  );
};

export default ImageUploader;
