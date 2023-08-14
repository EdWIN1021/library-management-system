"use client";
import styles from "./styles.module.scss";
import Grid from "@mui/material/Grid";
import Input from "../Input/Input";
import { Container } from "@mui/material";
import { User } from "@/app/types";
import { useSession } from "next-auth/react";
import ImageUploader from "../ImageUploader/ImageUploader";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import BackHandIcon from "@mui/icons-material/BackHand";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Borrow } from "@prisma/client";
import dayjs from "dayjs";

const Settings = ({ borrowList }: { borrowList: Borrow[] }) => {
  const { data: session, status } = useSession();
  const user = session?.user as User;
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const imageUrl = useMemo(
    () =>
      user?.provider === "library" ?
        user?.image ? `https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2F${user?.image}?alt=media&token=12c1b750-d60c-4123-82ce-c4f76baf5764` : "/images/placeholder.jpg"
        : user?.image || "/images/placeholder.jpg"
    ,
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
    <Container className={styles.container}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <div>Your Profile Picture</div>

          <img
            className={styles.image}
            src={imageUrl}
            style={{ width: "250px", height: "300px" }}
          />
        </div>

        <div className={styles.rectangle}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <AutoStoriesIcon />
              <div>{borrowList?.length}</div>
            </div>
            <div>Readings</div>
          </div>
        </div>

        <div className={`${styles.rectangle} ${styles.borrowed}`}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <BackHandIcon />
              <div>{borrowed_books?.length}</div>
            </div>
            <div>Borrowed</div>
          </div>
        </div>

        <div className={`${styles.rectangle} ${styles.expired}`}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <AssignmentLateIcon />
              <div>{expired_books?.length}</div>
            </div>
            <div>Expired</div>
          </div>
        </div>
      </div>
      <div>
        <form>
          {user?.provider === "library" && <ImageUploader user={user} />}
          <Grid container>
            <Grid item xs={6}>
              <Input lable="ID" disabled value={user?.id || ""} />
            </Grid>
            <Grid item xs={6}>
              <Input lable="Provider" disabled value={user?.provider || ""} />
            </Grid>
            <Grid item xs={6}>
              <Input lable="Username" disabled value={user?.name || ""} />
            </Grid>
            <Grid item xs={6}>
              <Input lable="Email" disabled value={user?.email || ""} />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Settings;
