import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const handleClickFacebook = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100073188185590",
    "_blank"
  );
};

const handleClickTwitter = () => {
  window.open("https://twitter.com/home", "_blank");
};

const handleClickLinkedIn = () => {
  window.open(
    "https://www.linkedin.com/in/atishmita-dash-503b12223/",
    "_blank"
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full bg-bodyColor sticky top-0 h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 bg-opacity-95 backdrop-filter backdrop-blur-lg z-10 px-4 md:px-8">
      
      {/* Logo */}
      <div>
        <img className="w-24 md:w-32" src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-12 h-12 flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              
              {/* Logo & Description */}
              <div>
                <img className="w-28 md:w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I am a Final year student with expertise in Data Engineering, Data Analytics, SQL, SAP (ABAP), and Graphic Design. I deliver innovative solutions that prioritize functionality, aesthetics, and user satisfaction.
                </p>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li
                    key={_id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon" onClick={handleClickFacebook}>
                    <FaFacebook />
                  </span>
                  <span className="bannerIcon" onClick={handleClickTwitter}>
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon" onClick={handleClickLinkedIn}>
                    <FaLinkedin />
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
