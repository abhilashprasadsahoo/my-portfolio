import { useState } from "react";
import {
  FaDatabase,
  FaFacebookF,
  FaLinkedinIn,
  FaPaintBrush,
  FaTwitter
} from "react-icons/fa";
import { SiFigma, SiGoogleanalytics, SiMicrosoftexcel, SiSap } from "react-icons/si";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { navLinksdata } from "../../constants";

const LeftBanner=() =>{
     const [text] = useTypewriter({
    words: ["Data Engineer", "SAP Developer.", "Graphics Designer.", "UI/UX Designer."],
    Loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleClickFacebook = () => {
    window.open(
      "https://www.facebook.com/abhilashprasad.sahoo.9",
      "_blank"
    );
  };

  const handleClickTwitter = () => {
    window.open("https://x.com/Abhilas2270762", "_blank");
  };

  const handleClickLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/abhilash-prasad-sahoo-98aa67247/",
      "_blank"
    );
  };

  const handleClickGithub = () => {
    window.open(
      "https://github.com/abhilashprasadsahoo",
      "_blank"
    );
  };



    const handleClickUXDesigner = () => {
      window.open("www.linkedin.com/in/abhilash-prasad-sahoo-98aa67247", "_blank");
    };
    
  const [showMenu, setShowMenu] = useState(false);

    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg  pt-3 pb-3 font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize"> Abhilash Prasad Sahoo</span>
          </h1>
          <h2 className="text-3xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
I am a Final year student with expertise in Data Engineering, Data Analytics, SQL, SAP (ABAP) and Graphic Design.I deliver innovative solutions that prioritize functionality, aesthetics and user satisfaction.          </p>
        </div>
        <div className=" flex items-center space-x-6 lg:space-x-12">
          {navLinksdata.map((item) =>
            item.link === "projects" ? (
              <button
                key={item.id}
                className="bg-designColor font-semibold  rounded-md outline outline-offset- outline-designColor pt-3 pr-4 pb-3 pl-4"
              >
                <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Data Analytics
                </Link>
              </button>
            ) : null
          )}
          <button
            className="text-designColor capitalize font-semibold rounded-md outline-2 outline outline-offset- outline-designColor pt-3 pr-4 pb-3 pl-4"
            onClick={handleClickUXDesigner}
          >
            Graphics Designing
          </button>
        </div>
        <div className="bg-red -400 flex flex-col xl:flex-row gap-6 lgl:gap-0 ">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4 ">
              Find me in
            </h2>
            <div className="flex gap-4 mr-12">
              <span className="bannerIcon" onClick={handleClickFacebook}>
                <FaFacebookF />
              </span>
              <span className="bannerIcon" onClick={handleClickTwitter}>
                <FaTwitter />
              </span>
              <span className="bannerIcon" onClick={handleClickLinkedIn}>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaDatabase />
              </span>
              <span className="bannerIcon">
                <SiGoogleanalytics />
              </span>
              <span className="bannerIcon">
                <SiSap />
              </span>
              <span className="bannerIcon">
                <FaPaintBrush />
              </span>
              <span className="bannerIcon">
                <SiFigma />
              </span>
              <span className="bannerIcon">
                <SiMicrosoftexcel />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftBanner
