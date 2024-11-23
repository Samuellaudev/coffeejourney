import { useRef } from "react";
import { Environment, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { SectionTitle } from "./SectionTitle";

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
          <SectionTitle position-x={ 0.5 }>HOME</SectionTitle>
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
