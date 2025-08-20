import { useState } from 'react';
import Title from '../layouts/Title';
import Achievements from './Achievements';
import Education from './Education';
import Experience from "./Experience";
import Responsibilities from './Responsibilities';
import Skills from './Skills';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [responsibilities, setResponsibilities] = useState(false);
   const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="An overview of " des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          {/* Education */}
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setResponsibilities(false) &
              setAchievementData(false)
            }
            className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
          >
            Education
          </li>

          {/* Professional Skills */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setResponsibilities(false) &
              setAchievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
          >
            Professional Skills
          </li>

          {/* Experience */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setResponsibilities(false) &
              setAchievementData(false)
            }
            className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
          >
            Experience
          </li>

          {/* Responsibilities */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setResponsibilities(true) &
              setAchievementData(false)
            }
            className={`${responsibilities ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
          >
            Responsibilities
          </li>

          {/* Achievements */}
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setResponsibilities(false) &
              setAchievementData(true)
            }
            className={`${achievementData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Sections */}
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {responsibilities && <Responsibilities />}
      {achievementData && <Achievements />}
    </section>
  );
}

export default Resume;
