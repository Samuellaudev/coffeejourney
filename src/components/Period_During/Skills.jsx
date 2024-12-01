import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeMenu } from './CoffeeMenu';
import { Lamp } from './Lamp';
import { PhotoBoxFive } from './PhotoBoxFive';
import { PhotoBoxSix } from './PhotoBoxSix';

export const Skills = () => {
  return (
    <group position={[-2, 0, 0]}>
      {/* Section Title */}
      <SectionTitle 
        scale={1.5} 
        position={[0, 0.1, 1.5]} 
        rotation-y={Math.PI / 6}
      >
        Skills
      </SectionTitle>

      {/* Coffee Menu */}
      <CoffeeMenu 
        scale={1} 
        position={[-0.2, 1.8, 0]} 
        rotation-y={Math.PI / 4} 
      />

      {/* Floating Photo Boxes */}
      <Float floatIntensity={2}>
        <PhotoBoxFive />
        <PhotoBoxSix />
      </Float>

      {/* Lamp */}
      <Lamp 
        position={[-0.4, -0.8, 0.6]} 
        rotation-y={-Math.PI} 
      />
    </group>
  );
};
