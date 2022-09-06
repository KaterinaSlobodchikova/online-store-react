import { FC } from "react";
import classNames from "classnames";

import styles from "./Footer.module.css";
import IconButton from "../IconButton";
import {
  FacebookIcon,
  InstagramIcon,
  Logotype,
  TwitterIcon,
} from "../../Assets";

const Footer: FC = () => {
  return (
    <div className={classNames(styles.footerContainer)}>
      <div className={classNames(styles.infoWrapper)}>
        <div className={classNames(styles.blocksWrapper)}>
          <h3>Services</h3>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className={classNames(styles.blocksWrapper)}>
          <h3>About</h3>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div className={classNames(styles.blocksWrapper)}>
          <h3>Help</h3>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <IconButton icon={Logotype} onClick={() => {}} />
      </div>
      <div className={classNames(styles.termsContainer)}>
        <div className={classNames(styles.termsWrapper)}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className={classNames(styles.socialWrapper)}>
          <IconButton icon={FacebookIcon} onClick={() => {}} />
          <IconButton icon={TwitterIcon} onClick={() => {}} />
          <IconButton icon={InstagramIcon} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
