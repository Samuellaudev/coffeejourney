import { useState } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMobile } from "../../hooks/useMobile";
import { motion } from "framer-motion";
import { config } from "../../config";
import { atom, useAtom } from "jotai";
import './Interface.css'

export const projectAtom = atom(config.projects[0]);

export const Interface = () => {
  const { isMobile } = useMobile();
  const scrollData = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useFrame(() => {
    setHasScrolled(scrollData.offset > 0);
  });

  const [_project, setProject] = useAtom(projectAtom);

  return (
    <div className="interface">
      <div className="sections">
        {/* HOME */ }
        <section className="section section--bottom">
          <motion.div
            className="scroll-down"
            initial={ {
              opacity: 0,
            } }
            animate={ {
              opacity: hasScrolled ? 0 : 1,
            } }
          >
            <motion.div
              className="scroll-down__wheel"
              initial={ {
                translateY: 0,
              } }
              animate={ {
                translateY: 4,
              } }
              transition={ {
                duration: 0.4,
                repeatDelay: 0.5,
                repeatType: "reverse",
                repeat: Infinity,
              } }
            ></motion.div>
          </motion.div>
        </section>

        {/* FlyToUk */ }
        <section className="section section--bottom"></section>
        {/* Jobless */ }
        <section className="section section--right"></section>
        {/* WellGrounded */ }
        <section className="section section--left"></section>
        {/* Essentials */ }
        <section className="section section--right"></section>
        {/* Master */ }
        <section className="section section--left"></section>

        {/* SKILLS */ }
        <section className="section section--right mobile--section--bottom">
          <motion.div
            className="skills"
            whileInView={ "visible" }
            initial={ {
              opacity: 0,
            } }
            variants={ {
              visible: {
                opacity: 1,
              },
            } }
            viewport={ {
              margin: isMobile ? "-70% 0px 0px 0px" : undefined
            } }
          >
            { config.skills.map((skill, idx) => (
              <motion.div
                key={ skill.name }
                className="skill"
                initial={ { opacity: 0 } }
                variants={ {
                  visible: {
                    opacity: 1,
                  },
                } }
                transition={ {
                  duration: 1,
                  delay: idx * 0.62,
                } }
              >
                <div className="skill__label">
                  <h2 className="skill__label__name">{ skill.name }</h2>
                  <div className="checkmark"></div>
                </div>
              </motion.div>
            )) }
          </motion.div>
        </section>

        {/* Work Placement */ }
        <section className="section section--left"></section>

        {/* CONTACT */ }
        <section className="section section--left mobile--section--bottom">
          <motion.div
            className="contact"
            whileInView={ "visible" }
            initial={ {
              opacity: 0,
            } }
            variants={ {
              visible: {
                opacity: 1,
              },
            } }
          >
            <div>
              <h1 className="contact__name">{ config.contact.name }</h1>
              <p className="contact__address">{ config.contact.address }</p>
            </div>
            <div className="contact__socials">
              <a href={ config.contact.socials.instagram } target="_blank">
                <img
                  className="contact__socials__icon"
                  src="icons/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href={ `mailto:${ config.contact.mail }` } target="_blank">
                <img
                  className="contact__socials__icon"
                  src="icons/email.png"
                  alt="email"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};