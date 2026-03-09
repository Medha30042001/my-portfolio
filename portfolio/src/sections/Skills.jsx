import React from "react";
import SkillIcon from "../components/SkillIcon";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-primary">

      <div className="max-w-6xl mx-auto px-6 space-y-16">

        <h2 className="text-4xl font-bold text-center">Skills</h2>

        <div>

          <h3 className="text-xl mb-8 text-secondary">Frontend</h3>

          <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center gap-y-12">
            <SkillIcon icon={<FaReact />} label="React" />
            <SkillIcon icon={<RiTailwindCssFill />} label="Tailwind" />
            <SkillIcon icon={<FaHtml5 />} label="HTML" />
            <SkillIcon icon={<FaCss3Alt />} label="CSS" />
            <SkillIcon icon={<TbBrandJavascript />} label="JavaScript" />
          </div>

        </div>

        <div>

          <h3 className="text-xl mb-8 text-secondary">Backend</h3>

          <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center gap-y-12">
            <SkillIcon icon={<FaNodeJs />} label="Node.js" />
            <SkillIcon icon={<FaJava />} label="Java" />
          </div>

        </div>

        <div>

          <h3 className="text-xl mb-8 text-secondary">Tools</h3>

          <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center gap-y-12">
            <SkillIcon icon={<FaGithub />} label="GitHub" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;