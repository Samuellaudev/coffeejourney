import { Float } from "@react-three/drei";
import { SectionTitle } from "../SectionTitle";
import { Balloon } from "./Balloon";
import { PhotoBoxSix } from "./PhotoBoxSix";
import { PhotoBoxSeven } from "./PhotoBoxSeven";
import { PhotoBoxNine } from "./PhotoBoxNine";
import { PhotoBoxTen } from "./PhotoBoxTen";
import { ThumbUp } from "./ThumbUp";

export const ThankYou = () => {
  return (
    <>
      {/* Left Group */}
      <group>
        {/* Balloons */}
        <group position={[-0.5, 2, -1]}>
          <Float floatIntensity={2} rotationIntensity={1.5}>
            <Balloon scale={1.5} position={[-0.5, 0.4, 0]} color="#71a2d9" />
          </Float>
          <Float floatIntensity={1.5} rotationIntensity={2} position={[0, 0, 0.5]}>
            <Balloon scale={1.3} color="#d97183" />
          </Float>
          <Float floatIntensity={2} speed={2} rotationIntensity={2}>
            <Balloon scale={1.6} position={[0.2, 0.4, 0]} color="yellow" />
          </Float>
        </group>

        {/* Section Title */}
        <SectionTitle 
          scale={1.3} 
          position={[-2.9, 0.2, 1]} 
          rotation-y={0.5} 
          color="#FFBF00"
        >
          Thank You
        </SectionTitle>

        {/* Photo Boxes */}
        <group position={ [-0.5, 0, 0] }>
        <Float floatIntensity={2}>
          <PhotoBoxSix />
          <PhotoBoxSeven />
        </Float>
        </group>
      </group>

      {/* Right Group */}
      <group position={[1, 0, 0]}>
        {/* Thumb Up */}
        <Float floatIntensity={0.3} rotationIntensity={1.5}>
          <ThumbUp 
            scale={0.3} 
            position={[1.4, 0.6, 1]} 
            rotation-y={2.5} 
          />
        </Float>

        {/* Photo Boxes */}
        <Float floatIntensity={0.8} rotationIntensity={1.3} position={[0, 0.5, 0]}>
          <PhotoBoxTen />
          <PhotoBoxNine />
        </Float>
      </group>
    </>
  );
};
