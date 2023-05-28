"use client";
import styles from "./styles.module.scss";
import Logo from "../Logo/Logo";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import { DiSnapSvg } from "react-icons/di";
import { Typography } from "@mui/material";

const footerData = [
  {
    title: "Edwin Inc",
    subtitles: ["Pricing", "Updates", "Beta", "Newsletter", "Collaborations"],
  },
  {
    title: "Product",
    subtitles: ["Business", "Designers", "Classrooms", "Newscommers"],
  },
  {
    title: "Learning",
    subtitles: ["Learn Hub", "Manulas", "Beta", "Tutorials", "Communities"],
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
      <div className={styles.info}>
        {footerData.map((data) => (
          <div key={data.title}>
            <Typography className={styles.title} variant="body1">
              {data?.title}
            </Typography>

            {data?.subtitles?.map((subtitle, index) => (
              <Typography key={`${subtitle}${index}`} variant="body2">
                {subtitle}
              </Typography>
            ))}
          </div>
        ))}
      </div>

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
