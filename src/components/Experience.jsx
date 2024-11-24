import { useRef } from "react";
import { Environment, useScroll, Center, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { SectionTitle } from "./SectionTitle";
import { MacBookPro } from "./MacBookPro";
import { PalmTree } from "./PalmTree";
import { Star } from "./Star";

import { config } from "../config";
import * as THREE from "three";

const SECTIONS_DISTANCE = 10;

export const Experience = () => {
  const sceneContainer = useRef()
  const scrollData = useScroll()

  useFrame(() => {
    sceneContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1)
  })

  return (
    <>
      <Environment preset="sunset" />
      <Avatar />

      <group ref={ sceneContainer }>
        {/* HOME */ }
        <group>
          <Star position-z={ 0 } position-y={ 2.2 } scale={ 0.3 } />
          <Float floatIntensity={ 2 } speed={ 2 }>
            <MacBookPro
              position-x={ -1 }
              position-y={ 0.5 }
              position-z={ 0 }
              scale={ 0.3 }
              rotation-y={ Math.PI / 4 }
            />
          </Float>
          <PalmTree
            scale={ 0.018 }
            rotation-y={ THREE.MathUtils.degToRad(140) }
            position={ [4, 0, -5] }
          />
          <Float floatIntensity={ 0.6 }>
            <Center disableY disableZ>
              <SectionTitle
                size={ 0.8 }
                position-y={ 1.6 }
                position-z={ -3 }
                bevelEnabled
                bevelThickness={ 0.3 }
              >
                { config.home.title }
              </SectionTitle>
            </Center>
          </Float>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.8 }
              position-x={ -1 }
              position-z={ -3 }
              bevelEnabled
              bevelThickness={ 0.3 }
              rotation-y={ Math.PI / 10 }
            >
              { config.home.subtitle }
            </SectionTitle>
          </Center>
        </group>
        {/* SKILLS */ }
        <group position-z={ SECTIONS_DISTANCE }>
          <SectionTitle position-x={ 0.5 }>SKILLS</SectionTitle>
        </group>
        {/* PROJECTS */ }
        <group position-z={ SECTIONS_DISTANCE * 2 }>
          <SectionTitle position-x={ 0.5 }>PROJECTS</SectionTitle>
        </group>
        {/* CONTACT */ }
        <group position-z={ SECTIONS_DISTANCE * 3 }>
          <SectionTitle position-x={ 0.5 }>CONTACT</SectionTitle>
        </group>
      </group>
    </>
  );
};
