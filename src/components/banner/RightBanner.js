import { motion } from "framer-motion";
import { bannerImage } from "../../assets/index";

const RightBanner = () => {
  return (
    <motion.div
      className="lgl:w-1/2 flex justify-center items-center relative w-full h-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background shadow/gradient */}
      <div className="absolute bottom-0 w-[350px] h-[450px] lgl:w-[500px] lgl:h-[600px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne z-0 rounded-xl"></div>

      {/* Rectangular Banner Image with hover & floating effect */}
      <motion.img
        src={bannerImage}
        alt="banner"
        className="w-[350px] h-[450px] lgl:w-[500px] lgl:h-[600px] z-10 object-cover rounded-xl shadow-lg"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,0,79,0.4)" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default RightBanner;
