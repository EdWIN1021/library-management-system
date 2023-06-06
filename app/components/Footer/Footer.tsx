"use client";
import styles from "./styles.module.scss";
import Logo from "../Logo/Logo";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import { DiSnapSvg } from "react-icons/di";
import { Grid } from "@mui/material";

const footerData = [
  {
    title: "Edwin Inc",
    subtitles: ["Pricing", "Updates", "Beta", "Newsletter"],
  },
  {
    title: "Product",
    subtitles: ["Business", "Designers", "Classrooms", "Newscommers"],
  },
  {
    title: "Resources",
    subtitles: ["Tutorials", "Editorials", "Beta", , "Product"],
  },
  {
    title: "About",
    subtitles: ["Company", "Careers", "Legal", "Help"],
  },
];

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Grid container alignItems="flex-start" justifyContent={"center"} gap={5}>
        {footerData.map((data) => (
          <Grid
            className={styles.grid}
            item
            key={data.title}
            xs={12}
            sm={4}
            lg={2}
          >
            <div className={styles.wrapper}>
              <div className={styles.title}>{data?.title}</div>

              {data?.subtitles?.map((subtitle) => (
                <div className={styles.subtitle} key={subtitle}>
                  {subtitle}
                </div>
              ))}
            </div>
          </Grid>
        ))}
      </Grid>

      <Logo />

      <div className={styles.copyright}>
        © 2023 Edwin Inc. All rights reserved.
      </div>

      <div className={styles.social}>
        <AiFillFacebook size={30} />
        <AiFillTwitterSquare size={30} />
        <AiOutlineInstagram size={30} />
        <DiSnapSvg size={30} />
      </div>
    </section>
  );
};

export default Footer;
