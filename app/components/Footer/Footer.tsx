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
    <>
      <Box className={styles.footer}>
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
            <div>Pricing</div>
            <div>Updates</div>
            <div>Beta</div>
            <div>Newsletter</div>
            <div>Collaborations</div>
          </div>
          <div>
            <div className={styles.title}>Learning</div>
            <div>Pricing</div>
            <div>Updates</div>
            <div>Beta</div>
            <div>Newsletter</div>
            <div>Collaborations</div>
          </div>

          <div>
            <div className={styles.title}>Resources</div>
            <div>Pricing</div>
            <div>Updates</div>
            <div>Beta</div>
            <div>Newsletter</div>
            <div>Collaborations</div>
          </div>

          <div>
            <div className={styles.title}>About</div>
            <div>Pricing</div>
            <div>Updates</div>
            <div>Beta</div>
            <div>Newsletter</div>
            <div>Collaborations</div>
          </div>
        </div>

        <Logo />
        <div className={styles.copyright}>
          © 2020 Edwin Inc. All rights reserved.
        </div>
        <div className={styles.social}>
          <AiFillFacebook size={30} />
          <AiFillTwitterSquare size={30} />
          <AiOutlineInstagram size={30} />
          <DiSnapSvg size={30} />
        </div>
      </Box>
    </>
  );
};

export default Footer;
