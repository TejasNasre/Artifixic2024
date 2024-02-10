import React from "react";
import sambhavLogo from "../../assets/output_image-removebg-preview.png";
import classes from "./Footer.module.css";

const sambhavinsta = "https://www.instagram.com/aiclub.ghrietn/";
const sambhavlinkedin = "https://www.linkedin.com/company/artificial-intelligence-io/";
// const sambhavitwitter=''

const grabbitinsta = "https://www.instagram.com/grabbits_/";
const grabbitlinkedin = "https://www.linkedin.com/company/grabbits/";
const grabbittwitter = "https://twitter.com/grabbits_";
const grabbitwebsite = "https://grabbits.vercel.app/";

const spiderurl = "https://www.linkedin.com/in/tejasnasre/";
const saurabh = "https://www.linkedin.com/in/saurabh-barde-5b617321a/";
const sanyog = "https://www.linkedin.com/in/sanyog-mahajan-8288a7204/";

const grabbiturl = "https://www.grabbitdypcoe.in";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={sambhavLogo}
                alt="sambhavLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            Artificix'24 is One of the Largest Technical festival of GHRIET. Let&apos;s
            make a Tech move.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={sambhavinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={sambhavlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>G H Raisoni Institute of Engineering and Technology, Nagpur</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>Shwetal Potle (9356526020)</p>
              <p>Om Barde (8766721568)</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>shwetal.potle.ai@ghrietn.raisoni.net</p>
              <p className={classes.mail}>om.barde.ai@ghrietn.raisoni.net</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Made With 💗 By{" "}
          <a
            href={spiderurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            Tejas Nasre
          </a>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
