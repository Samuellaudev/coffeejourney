import { useEffect, useRef, useState } from "react";
import {
  Environment,
  useScroll,
  ContactShadows
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
// Period Before
import { Home } from "./Period_Before/Home";
import { FlyToUk } from "./Period_Before/FlyToUk";
import { Jobless } from "./Period_Before/Jobless";
import { WellGrounded } from "./Period_Before/WellGrounded";
// Period During
import { Essentials } from "./Period_During/Essentials";
import { Master } from "./Period_During/Master";
import { Skills } from "./Period_During/Skills";
import { WorkPlacement } from "./Period_During/WorkPlacement";
// import { Projects } from "./Period_During/Projects";
// Period After
import { ThankYou } from "./Period_After/ThankYou";

import { config } from "../config";

const SECTIONS_DISTANCE = 10;

export const Experience = () => {
  const [section, setSection] = useState(config.sections[0])
  const sceneContainer = useRef()
  const scrollData = useScroll()

  useFrame(() => {
    sceneContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1)

    setSection(
      config.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]
    )
  })

  useEffect(() => {
    const handleHashChange = () => {
      const sectionIndex = config.sections.indexOf(
        window.location.hash.replace("#", "")
      );
      if (sectionIndex >= 0) {
        scrollData.el.scrollTo(
          0,
          (sectionIndex / (config.sections.length - 1)) *
          (scrollData.el.scrollHeight - scrollData.el.clientHeight)
        );
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Environment preset="sunset" />
      <Avatar />

      {/* SHADOWS & FLOOR */ }
      <ContactShadows opacity={ 0.5 } scale={ [30, 30] } color="#9c8e66" />
      <mesh position-y={ -0.001 } rotation-x={ -Math.PI / 2 }>
        <planeGeometry args={ [100, 100] } />
        <meshBasicMaterial color="#f5f3ee" />
      </mesh>

      <motion.group
        ref={ sceneContainer }
        animate={ section }
      >
        {/* HOME */ }
        <motion.group
          position-y={ -5 }
          variants={ {
            webDeveloper: {
              y: 0
            }
          } }
        >
          <Home />
        </motion.group>
        {/* FlyToUk */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE }
          position-y={ -5 }
          variants={ {
            flyToUk: {
              y: 0,
            },
          } }
        >
          <FlyToUk />
        </motion.group>
        {/* Jobless */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 2 }
          position-y={ -5 }
          variants={ {
            jobless: {
              y: 0,
            },
          } }
        >
          <Jobless />
        </motion.group>
        {/* WellGrounded */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 3 }
          position-y={ -5 }
          variants={ {
            wellGrounded: {
              y: 0,
            },
          } }
        >
          <WellGrounded />
        </motion.group>
        {/* Essentials */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 4 }
          position-y={ -5 }
          variants={ {
            essentials: {
              y: 0,
            },
          } }
        >
          <Essentials />
        </motion.group>
        {/* Master */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 5 }
          position-y={ -5 }
          variants={ {
            master: {
              y: 0,
            },
          } }
        >
          <Master />
        </motion.group>
        {/* SKILLS */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 6 }
          position-y={ -5 }
          variants={ {
            skills: {
              y: 0,
            },
          } }
        >
          <Skills />
        </motion.group>
        {/* Work Placement */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 7 }
          position-y={ -5 }
          variants={ {
            workPlacement: {
              y: 0,
            },
          } }
        >
          <WorkPlacement />
        </motion.group>

        {/* PROJECTS */ }
        {/* <motion.group
          position-z={ SECTIONS_DISTANCE * 7 }
          position-y={ -5 }
          variants={ {
            projects: {
              y: 0,
            },
          } }
        >
          <Projects />
        </motion.group> */}

        {/* Thank You */ }
        <motion.group
          position-z={ SECTIONS_DISTANCE * 8 }
          position-y={ -5 }
          variants={ {
            thankYou: {
              y: 0,
            },
          } }
        >
          <ThankYou />
        </motion.group>
      </motion.group>
    </>
  );
};
