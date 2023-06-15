"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import styles from "./styles.module.scss";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Input from "../Input/Input";
import { Button, Container } from "@mui/material";
import { User } from "@/app/types";
import ImageUploader from "../ImageUploader/ImageUploader";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import BackHandIcon from "@mui/icons-material/BackHand";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Settings = ({ user }: { user: User | null }) => {
  return (
    <Container className={styles.container}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <div>Your Profile Picture</div>
          <Image
            className={styles.image}
            src={user?.image || "/images/placeholder.jpg"}
            alt="..avatar"
            width="200"
            height="250"
            priority
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
