import { useEffect, useRef, useState } from "react";
import {
  Environment,
  useScroll,
  ContactShadows
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMobile } from "../hooks/useMobile";
import { config } from "../config";

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
// Period After
import { Contact } from "./Period_After/Contact";

const SECTIONS_DISTANCE = 10;

export const Experience = () => {
  const [section, setSection] = useState(config.sections[0])
  const sceneContainer = useRef()
  const scrollData = useScroll()
  const { isMobile } = useMobile()

  useFrame(() => {
    const positionOffset = -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);

    // Set z-axis to 0 when in mobile
    if (isMobile) {
      sceneContainer.current.position.set(positionOffset, 0, 0)
    } else {
      sceneContainer.current.position.set(0, 0, positionOffset)
    }

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
      <Avatar position-z={ isMobile ? -5 : 0 } />

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
          position-x={ isMobile ? SECTIONS_DISTANCE : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE }
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
          position-x={ isMobile ? SECTIONS_DISTANCE * 2 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 2 }
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
          position-x={ isMobile ? SECTIONS_DISTANCE * 3 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 3 }
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
          position-x={ isMobile ? SECTIONS_DISTANCE * 4 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 4 }
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
          position-x={ isMobile ? SECTIONS_DISTANCE * 5 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 5 }
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
          position-x={ isMobile ? SECTIONS_DISTANCE * 6 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 6 }
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
          position-x={ isMobile ? SECTIONS_DISTANCE * 7 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 7 }
          position-y={ -5 }
          variants={ {
            workPlacement: {
              y: 0,
            },
          } }
        >
          <WorkPlacement />
        </motion.group>

        {/* Contact */ }
        <motion.group
          position-x={ isMobile ? SECTIONS_DISTANCE * 8 : 0 }
          position-z={ isMobile ? -4 : SECTIONS_DISTANCE * 8 }
          position-y={ -5 }
          variants={ {
            contact: {
              y: 0,
            },
          } }
        >
          <Contact />
        </motion.group>
      </motion.group>
    </>
  );
};
