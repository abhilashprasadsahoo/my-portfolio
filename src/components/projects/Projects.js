import {
  project1,
  project2,
  projectOne,
  projectTwo
} from "../../assets/index";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Music Store Analysis Using SQL "
          des="🎵Music Store Analysis Using SQL 🔍 Analyze an online music store’s data with practical SQL queries uncover top customers, best-selling artists, country-wise trends, and insights to boost business growth."
          src={project1}
          githubLink="https://github.com/abhilashprasadsahoo/Music-Store-Analysis-using-SQL.git"
          websiteLink="https://github.com/abhilashprasadsahoo/Music-Store-Analysis-using-SQL.git"
        />
        <ProjectsCard
          title="Student’s Social Media Addiction Dashboard "
          des="📊 Students’ Social Media Addiction Dashboard Analyzes students’ screen time, app preferences, and engagement trends to uncover digital habits and highlight signs of excessive use. Designed to help educators and parents promote digital well-being and healthier online behavior."
          src={project2}
          githubLink="https://github.com/abhilashprasadsahoo/Students-Social-Media-Addiction-Dashboard-using-Excel-and-Tableau.git"
          websiteLink="https://github.com/abhilashprasadsahoo/Students-Social-Media-Addiction-Dashboard-using-Excel-and-Tableau.git"
        />
        <ProjectsCard
          title="HR Analytics Dashboard"
          des="📊 HR Employee Attrition Analysis Dashboard 🔍This project presents an Excel-based HR Analytics Dashboard designed to provide insights into employee attrition patterns within an organization. The dashboard allows users to explore key factors influencing attrition and employee satisfaction using interactive visualizations."
          src={projectOne}
          githubLink="https://github.com/abhilashprasadsahoo/HR-ANALYTICS-DASHBOARD.git"
          websiteLink="https://github.com/abhilashprasadsahoo/HR-ANALYTICS-DASHBOARD.git"
        />
        <ProjectsCard
          title="NetFLix Dashboard Using Tableau"
          des="🎬 Netflix Data Dashboard – Tableau Workbook This Tableau workbook presents a detailed data visualization dashboard based on Netflix content analysis."
          src={projectTwo}
          githubLink="https://github.com/abhilashprasadsahoo/Netflix-Dashboard-Using-Tableau.git"
          websiteLink="https://github.com/abhilashprasadsahoo/Netflix-Dashboard-Using-Tableau.git"
        />

        
      </div>
    </section>
  );
};

export default Projects;
