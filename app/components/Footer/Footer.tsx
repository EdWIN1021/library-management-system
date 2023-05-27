"use client";
import styles from "./styles.module.scss";
import Logo from "../Logo/Logo";
import Box from "@mui/material/Box";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import { DiSnapSvg } from "react-icons/di";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>Edwin Inc</div>
          <div>Pricing</div>
          <div>Updates</div>
          <div>Beta</div>
          <div>Newsletter</div>
          <div>Collaborations</div>
        </div>
        <div>
          <div className={styles.title}>Product</div>
          <div>Business</div>
          <div>Designers</div>
          <div>Classrooms</div>
          <div>Newscommers</div>
        </div>
        <div>
          <div className={styles.title}>Learning</div>
          <div>Learn Hub</div>
          <div>Manulas</div>
          <div>Beta</div>
          <div>Tutorials</div>
          <div>Communities</div>
        </div>

        <div>
          <div className={styles.title}>Resources</div>
          <div>Tutorials</div>
          <div>Editorials</div>
          <div>Beta</div>
          <div>Product</div>
        </div>

        <div>
          <div className={styles.title}>About</div>
          <div>Company</div>
          <div>Careers</div>
          <div>Legal</div>
          <div>Help</div>
        </div>
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
