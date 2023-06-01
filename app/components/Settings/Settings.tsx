"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import Input from "../Input/Input";
import { Button } from "@mui/material";

const Settings = () => {
  const [value, setValue] = useState("1");
  const { data: session } = useSession();
  console.log(session);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className={styles.tab}
      p={"40px"}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Account" value="1" />
            <Tab label="Login & Security" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className={styles.top}>
            <div className={styles.profile}>
              <div>Your Profile Picture</div>
              <Image
                className={styles.image}
                src={session?.user?.image || "/images/placeholder.jpg"}
                alt="..avatar"
                width="150"
                height="200"
                priority
              />
              <div className={styles.upload}>Upload New photo</div>
            </div>

            <div className={styles.rectangle}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <Image
                    src={"/images/book.png"}
                    alt="book..."
                    width="40"
                    height="40"
                    priority
                  />
                  <div style={{ fontSize: "25px" }}>120</div>
                </div>
                <div style={{ fontSize: "25px" }}>Readings</div>
              </div>
            </div>

            <div className={`${styles.rectangle} ${styles.borrowed}`}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <Image
                    src={"/images/book.png"}
                    alt="book..."
                    width="40"
                    height="40"
                    priority
                  />
                  <div style={{ fontSize: "25px" }}>10</div>
                </div>
                <div style={{ fontSize: "25px" }}>Borrowed</div>
              </div>
            </div>

            <div className={`${styles.rectangle} ${styles.expired}`}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <Image
                    src={"/images/book.png"}
                    alt="book..."
                    width="40"
                    height="40"
                    priority
                  />
                  <div style={{ fontSize: "25px" }}>1</div>
                </div>
                <div style={{ fontSize: "25px" }}>Expired</div>
              </div>
            </div>
          </div>

          <div>
            <form className={styles.uploadForm}>
              <Grid container px={"40px"}>
                <Grid item xs={6}>
                  <Input lable="ID" disabled value={"123"} />
                </Grid>
                <Grid item xs={6}>
                  <Input lable="Provider" disabled value={"google"} />
                </Grid>
                <Grid item xs={6}>
                  <Input lable="Username" />
                </Grid>
                <Grid item xs={6}>
                  <Input lable="Email" />
                </Grid>

                <Grid item xs={6} mt={"40px"}>
                  <Button variant="contained" size="large">
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </TabPanel>
        <TabPanel value="2">Item One</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Settings;
