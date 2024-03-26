"use client";

import Grid from "@mui/material/Grid";
import Input from "./Input";
import { User } from "@/types/types";
import { useSession } from "next-auth/react";
import ImageUploader from "./ImageUploader";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import BackHandIcon from "@mui/icons-material/BackHand";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Borrow } from "@prisma/client";
import dayjs from "dayjs";
import Image from "next/image";

const Settings = ({ borrowList }: { borrowList: Borrow[] }) => {
  const { data: session, status } = useSession();
  const user = session?.user as User;
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const imageUrl = useMemo(
    () =>
      user?.provider === "library"
        ? user?.image
          ? `https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2F${user?.image}?alt=media&token=12c1b750-d60c-4123-82ce-c4f76baf5764`
          : "/images/placeholder.jpg"
        : user?.image || "/images/placeholder.jpg",
    [user]
  );

  const expired_books = useMemo(
    () =>
      borrowList.filter(
        (book) =>
          dayjs().diff(dayjs(book?.returnDate), "day") > 0 && !book?.return
      ),
    [borrowList]
  );

  const borrowed_books = useMemo(
    () =>
      borrowList.filter(
        (book) =>
          dayjs().diff(dayjs(book?.returnDate), "day") > 0 && book?.return
      ),
    [borrowList]
  );

  return (
    <div className="bg-white p-10">
      <div className="flex items-center justify-center gap-20 ">
        <div className="flex flex-col">
          <p className="text-center text-xl mb-4">Your Profile Picture</p>
          <Image src={imageUrl} width={250} height={300} alt="avatar..." />
          {user?.provider === "library" && <ImageUploader user={user} />}
        </div>

        <div className="bg-[#ff8a00] p-10 rounded-lg text-white text-xl w-[10vw] flex flex-col justify-center items-center">
          <div className="flex gap-4 mb-2">
            <AutoStoriesIcon />
            <span>{borrowList?.length}</span>
          </div>

          <span>Readings</span>
        </div>

        <div className="bg-[#926cff] p-10 rounded-lg text-white text-xl w-[10vw] flex flex-col justify-center items-center">
          <div className="flex gap-4 mb-2">
            <BackHandIcon />
            <span>{borrowed_books?.length}</span>
          </div>

          <span>Borrowed</span>
        </div>

        <div className="bg-[#f34040] p-10 rounded-lg text-white text-xl w-[10vw] flex flex-col justify-center items-center">
          <div className="flex gap-4 mb-2">
            <AssignmentLateIcon />
            <span>{expired_books?.length}</span>
          </div>

          <span>Expired</span>
        </div>
      </div>

      <form>
        <Grid container>
          <Grid item xs={6} className="flex justify-center">
            <Input lable="ID" disabled value={user?.id || ""} />
          </Grid>
          <Grid item xs={6} className="flex justify-center">
            <Input lable="Provider" disabled value={user?.provider || ""} />
          </Grid>
          <Grid item xs={6} className="flex justify-center">
            <Input lable="Username" disabled value={user?.name || ""} />
          </Grid>
          <Grid item xs={6} className="flex justify-center">
            <Input lable="Email" disabled value={user?.email || ""} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Settings;
