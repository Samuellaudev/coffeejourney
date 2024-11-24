import { useRef } from "react";
import { Environment, useScroll, Center, Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Avatar } from "./Avatar";
// Home section
import { SectionTitle } from "./SectionTitle";
import { MacBookPro } from "./MacBookPro";
import { PalmTree } from "./PalmTree";
import { Star } from "./Star";
// Skills section
import { BookCase } from "./BookCase";
import { CouchSmall } from "./CouchSmall";
import { Lamp } from "./Lamp";
// Projects section
import { Monitor } from "./Monitor";

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
          <group position-x={ -2 }>
            <SectionTitle position-z={ 1.5 } rotation-y={ Math.PI / 6 }>
              SKILLS
            </SectionTitle>
            <BookCase position-z={ -2 } />
            <CouchSmall
              scale={ 0.4 }
              position-z={ 0 }
              position-x={ -0.2 }
              rotation-y={ Math.PI / 3 }
            />
            <Lamp
              position-z={ 0.6 }
              position-x={ -0.4 }
              position-y={ -0.8 }
              rotation-y={ -Math.PI }
            />
          </group>
          <mesh position-y={ 2 } position-z={ -4 } position-x={ 2 }>
            <sphereGeometry args={ [1, 64, 64] } />
            <MeshDistortMaterial
              opacity={ 0.8 }
              transparent
              distort={ 1 }
              speed={ 5 }
              color="yellow"
            />
          </mesh>
        </group>
        {/* PROJECTS */ }
        <group position-z={ SECTIONS_DISTANCE * 2 }>
          <group position-x={ 1 }>
            <SectionTitle
              position-x={ -0.5 }
              position-z={ 0 }
              rotation-y={ -Math.PI / 6 }
            >
              PROJECTS
            </SectionTitle>
            <group
              position-x={ 0.5 }
              position-z={ 0 }
              rotation-y={ -Math.PI / 6 }
              scale={ 0.8 }
            >
              <Monitor
                scale={ 0.02 }
                position-y={ 1 }
                rotation-y={ -Math.PI / 2 }
                position-z={ -1 }
              />
              <RoundedBox scale-x={ 2 } position-y={ 0.5 } position-z={ -1 }>
                <meshStandardMaterial color="white" />
              </RoundedBox>
            </group>
          </group>
        </group>
        {/* CONTACT */ }
        <group position-z={ SECTIONS_DISTANCE * 3 }>
          <SectionTitle position-x={ 0.5 }>CONTACT</SectionTitle>
        </group>
      </group>
    </>
  );
};
