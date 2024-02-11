import React from "react";
import "./Mentor.css";
import MentorCard from "../common/MentorCard/MentorCard";
import tabi from "../../assets/tabi.png";
import rahul from "../../assets/rahul.png";
import rakesh from "../../assets/rakesh.png";
import shweta from "../../assets/shweta.png";
import sharda from "../../assets/sharda.png";
import ayesha from "../../assets/ayesha.png";
import vishali from "../../assets/vishali.png";
import rajesh from "../../assets/rajesh.png";
import pooja from "../../assets/pooja.png";
import loke from "../../assets/loke.png";
import mam from "../../assets/mam.png";
import umesh from "../../assets/umesh.png";
import bokade from "../../assets/bokade.png";

export default function Mentro() {
  return (
    <>
      <div className="mentor-padd">
        <div className="mentor-heading">
          <h1>Our Mentors And Faculty Co-Ordinators</h1>
        </div>
        <div className="mentors">
          <MentorCard
            imgsrc={
              "https://media.licdn.com/dms/image/C5603AQGLR0qA4yQgJA/profile-displayphoto-shrink_200_200/0/1640167164242?e=1713398400&v=beta&t=eLV4VTf13JFW2hp91tEKUab4siSSVFSIbUWmTaF048w"
            }
            alt={"Dr.Vivek Kapur"}
            postion={"DIRECTOR GHRIET"}
            link={"https://www.linkedin.com/in/vivek-kapur1130/"}
          />
          <MentorCard
            imgsrc={
              "https://media.licdn.com/dms/image/D4D03AQHvRjKtaWRMIw/profile-displayphoto-shrink_200_200/0/1707589918302?e=1713398400&v=beta&t=zw5fWIA3IW1VtJXLbcUN4sYM-Cwsoodj5nsfrKd9Zvo"
            }
            alt={"Dr.Smita Nirkhi Singh"}
            postion={"HOD AI"}
            link={"https://www.linkedin.com/in/smitanirkhi/"}
          />
          <MentorCard
            imgsrc={sharda}
            alt={"Dr.Sharda Chhabria"}
            postion={"Associate Professor"}
            link={"https://www.linkedin.com/in/dr-sharda-chhabria-55a3496a/"}
          />
          <MentorCard
            imgsrc={tabi}
            alt={"Prof.TABASSUM H Khan"}
            postion={"Assistant Professor"}
            link={"https://www.linkedin.com/in/tabassum-h-khan-b24b5a1a4/"}
          />
          <MentorCard
            imgsrc={rahul}
            alt={"Prof.Rahul Suryawanshi"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={rakesh}
            alt={"Prof.RAKESH PANDEY"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={rajesh}
            alt={"Prof.Rajesh Nasare"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={shweta}
            alt={"Prof.Shweta Bhelonde"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={ayesha}
            alt={"Prof.Ayesha Khan"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={vishali}
            alt={"Prof.Vaishali Patil"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={bokade}
            alt={"Prof.Sweta Bokade"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={umesh}
            alt={"Prof.Umesh Lanjewar"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={pooja}
            alt={"Prof.Pooja Bhole"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={loke}
            alt={"Prof.Swapna Lokhande"}
            postion={"Assistant Professor"}
            link={"/"}
          />
          <MentorCard
            imgsrc={mam}
            alt={"Prof.Shetal Shende"}
            postion={"Assistant Professor"}
            link={"/"}
          />
        </div>
      </div>
    </>
  );
}
