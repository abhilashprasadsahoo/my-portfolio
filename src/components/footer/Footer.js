import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebook />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              About
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Services
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Blog
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Contact
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
             Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              System Status
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
             Terms Of Service
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Pricing
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Over Right
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-10"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};
export default Footer;
