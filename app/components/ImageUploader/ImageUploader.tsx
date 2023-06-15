"use client";

import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { uploadImage } from "@/app/lib/request";
import { User } from "@/app/types";
import LoadingButton from "@mui/lab/LoadingButton";
import { storage } from "../../../firebase/firebase";
import { deleteObject, ref, uploadBytes } from "firebase/storage";

const ImageUploader = ({ user }: { user: User | null }) => {
  const [file, setFile] = useState<File | null>(null);
  const { email } = user as User;
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation({
    mutationFn: uploadImage,
  });

  const onUpload = async () => {
    if (!file) {
      return;
    }

    setIsLoading(true);
    const imageRef = ref(storage, `images/${user?.id}`);

    if (user?.image) {
      await deleteObject(imageRef);
    }

    const res = await uploadBytes(imageRef, file);
    const imageId = res.metadata.name;

    await mutate(
      { imageId, email },
      {
        onSuccess: () => {},
        onSettled: () => {
          setIsLoading(false);
          setFile(null);
        },
      }
    );
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
