import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Responsibilities = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:flex-row gap-20"
    >
      <div>
        <div className=" mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
         
         
          <ResumeCard
            title="Management Lead"
            subTitle="Sep 2024 - Aug 2025"
            result="Google Developer Group on Campus GIET University"
            des=" Led the management and coordination of events, workshops, and hackathons under the GDG on Campus initiative."
          />


          <ResumeCard
            title="Co-Lead"
            subTitle="Jul 2024 - Aug 2025"
            result="Innotech Club GIET University"
            des="Assisted in leading the club’s initiatives, including technical workshops, project exhibitions, and innovation challenges"          />



          <ResumeCard
            title="Graphics Designer"
            subTitle="Dec 2024 - Aug 2025"
            result="AIML Club GIET University"
            des="Designed creative posters, banners, and digital content to promote workshops, hackathons, and events of the AIML Club. "
          />
  
  




        </div>
      </div>
    </motion.div>
  );
};

export default Responsibilities;
