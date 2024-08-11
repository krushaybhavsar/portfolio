import React from "react";
import "./SkillsSection.css";
import { LandingPageSectionProps } from "../../../../types";
import { SkillsSectionData } from "../../../../data";
import { motion } from "framer-motion";

type SkillsSectionProps = {} & LandingPageSectionProps;

const SkillsSection = (props: SkillsSectionProps) => {
  return (
    <div className="skills-section noise" id={props.sectionID}>
      <motion.h1
        className="skills-section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        viewport={{ once: true, amount: 1 }}
      >
        technical skills
      </motion.h1>
      <div className="skills-section-wrapper">
        <div className="skills-section-content">
          {SkillsSectionData.map((category, index) => {
            return (
              <div key={index} className="skills-section-category-container">
                <motion.h2
                  className="skills-section-category-title"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.75, delay: 0.25 },
                  }}
                  viewport={{ once: true, amount: 1 }}
                >
                  {category.categoryTitle}
                </motion.h2>
                <div className="skills-section-category">
                  {category.skills.map((skill, index) => {
                    return (
                      <motion.div
                        key={index}
                        className="skill-card glass"
                        whileHover={{ scale: 1.05 }}
                        whileInView={{
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          },
                        }}
                        initial={{
                          opacity: 0,
                        }}
                        viewport={{ once: true, amount: "all" }}
                      >
                        <p className="skill-card-name">{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
