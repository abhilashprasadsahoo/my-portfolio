import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-20"
    >
      <div>
        
        <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science and Engineering in Data Science"
            subTitle="Gandhi Institute of Engineering and Technology University, Odisha, Gunupur (2022-2026)"
            result="7th Sem"
            des=" Basic focus on algorithms, software development, and system optimization. Actively engaged in hands-on projects and workshops to enhance practical skills and stay updated with the latest industry trends."   />
          <ResumeCard
            title="Higher Secondary School of Education"
            subTitle="P.H.S.S.K. Deogarh, Odisha, 768110"
            result="67.83/100"
            des="Focused on mathematics, physics, and Bio, fostering critical thinking and problem-solving skills. Engaged in science fairs, igniting a passion for technology and innovation." />
          <ResumeCard
            title="Secondary School of Education"
            subTitle="M.H.S.Pallahara, Angul, Odisha, 759119"
            result="60.33/100"
            des="I cultivated a strong academic foundation across various subjects, including mathematics, science, and computer studies. This period honed my analytical thinking and problem-solving abilities."    />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
