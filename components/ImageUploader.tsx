"use client";

import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { uploadImage } from "@/lib/request";
import { User } from "@/types/types";
import { storage } from "../firebase/firebase";
import { deleteObject, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ImageUploader = ({ user }: { user: User | null }) => {
  const [file, setFile] = useState<File | null>(null);
  const { email } = user as User;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

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
          router.push("/");
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
    <>
      <Button
        className="text-white mt-5"
        component="label"
        variant="contained"
        onClick={() => inputRef.current?.click()}
        startIcon={<CloudUploadIcon />}
      >
        upload
      </Button>

      <input
        type="file"
        className="hidden"
        onChange={handleOnChange}
        ref={inputRef}
      />
    </>
  );
};

export default ImageUploader;
