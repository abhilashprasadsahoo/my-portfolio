import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const handleClickFacebook = () => {
  window.open(
    "www.linkedin.com/in/abhilash-prasad-sahoo-98aa67247",
    "_blank"
  );
};

const handleClickTwitter = () => {
  window.open("www.linkedin.com/in/abhilash-prasad-sahoo-98aa67247", "_blank");
};

const handleClickLinkedIn = () => {
  window.open(
    "www.linkedin.com/in/abhilash-prasad-sahoo-98aa67247",
    "_blank"
  );
};
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-12 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-white">Abhilash Prasad Sahoo</h3>
        <p className="text-lg font-normal text-gray-400">Data Engineer</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9078173607</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">abhilashprasadsahoo2005@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-2">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
