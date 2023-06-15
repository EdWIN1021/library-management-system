"use client";
import styles from "./styles.module.scss";
import Grid from "@mui/material/Grid";
import Input from "../Input/Input";
import { Container } from "@mui/material";
import { User } from "@/app/types";
import ImageUploader from "../ImageUploader/ImageUploader";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import BackHandIcon from "@mui/icons-material/BackHand";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useMemo } from "react";

const Settings = ({ user }: { user: User | null }) => {
  const imageUrl = useMemo(
    () =>
      user?.provider === "library"
        ? `https://firebasestorage.googleapis.com/v0/b/images-39219.appspot.com/o/images%2F${user?.image}?alt=media&token=12c1b750-d60c-4123-82ce-c4f76baf5764`
        : user?.image || "/images/placeholder.jpg",
    [user]
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
              <div>120</div>
            </div>
            <div>Readings</div>
          </div>
        </div>

        <div className={`${styles.rectangle} ${styles.borrowed}`}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <BackHandIcon />
              <div>10</div>
            </div>
            <div>Borrowed</div>
          </div>
        </div>

        <div className={`${styles.rectangle} ${styles.expired}`}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <AssignmentLateIcon />
              <div>1</div>
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
