import { FaPaintBrush } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  const handleWebDevelopmentClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {" "}
        <Card
          title="Data Analytics"
          des="Turning data into insights by analyzing patterns, trends, and business metrics for smarter decision-making"
          icon={<SiGoogleanalytics />}
          onClick={handleWebDevelopmentClick}
        />
        <Card
          title="Graphics Designing"
          des="Designing creative and impactful visuals that bring ideas to life through colors, layouts, and storytelling."
          icon={<FaPaintBrush />}
          onClick={() =>
            window.open("https://www.linkedin.com/in/abhilash-prasad-sahoo-98aa67247/", "_blank")
          }
        />
        <Card
          title="ASPIREEDGE PRIVATE LIMITED"
          des="Building a startup that provides students career opportunities to bridge the gap between learning and industry & Build Indrustial project."
          icon={<FaRocket />}
         onClick={() =>
            window.open("https://www.falconebiz.com/company/ASPIREEDGE-PRIVATE-LIMITED-U85500OD2025PTC050211", "_blank")
          }
        />
        
        
      </div>
    </section>
  );
};

export default Features;
