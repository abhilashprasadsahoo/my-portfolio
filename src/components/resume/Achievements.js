import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:flex-row gap-20"
    >
      <div>
        <div className=" mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
         
         
          <ResumeCard
            title="Campus Ambassador"
            subTitle=""
            result="Kshitij 2025 Organised by IIT KGP"
            des=" Represented GIET University, promoting brand awareness, organizing campus events, and engaging students through workshops and campaigns. Built strong peer networks, improved communication & leadership skills, and drove student participation"
          />
  
  




        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
