import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-6 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">



          <ResumeCard
            title="Data Analytics Intern"
            subTitle="Prepprignt"
            result="Apr 2025 - Jul 2025"
            des="During my internship at Zopiqa, I worked on creating user-friendly interfaces through research, prototyping, and collaboration with the design and development teams."
          />



       
          <ResumeCard
            title="Data Analytics Intern"
            subTitle="Central Tool Room & Training Cennter (MSME), Bhubaneswar, Odisha"
            result="Jun 2025 - Jul 25"
            des=""
          />



          <ResumeCard
            title="Data Science Intern"
            subTitle="Cognifyz Technology"
            result="Mar 2024 - Apr 2024"
            des=""
          />




        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
