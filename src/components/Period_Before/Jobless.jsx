import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';
import { BookCase } from '../Period_During/BookCase';
import { CouchSmall } from '../Period_During/CouchSmall';
import { Lamp } from '../Period_During/Lamp';
import { EmojiSad } from '../Period_Before/EmojiSad';

export const Jobless = () => {
  return (
    <>
      {/* Left Group - Floating Emoji, Bookcase, Couch, and Lamp */}
      <group position={[-2, 0, -1]}>
        <Float floatIntensity={0.6}>
          <EmojiSad position-y={3.3} rotation-y={0.2} />
        </Float>

        <BookCase position-z={-2} />

        <CouchSmall 
          scale={0.4} 
          position={[ -0.2, 0, 0 ]} 
          rotation-y={Math.PI / 3} 
        />

        <Lamp 
          position={[ -0.4, -0.8, 0.6 ]} 
          rotation-y={-Math.PI} 
        />
      </group>

      {/* Right Group - Dynamic and Static Section Titles */}
      <group position={[0.1, 0, -1]} rotation-y={-0.3}>
        <Float floatIntensity={0.6}>
          <SectionTitle 
            size={0.7} 
            position={[ 0.1, 2.3, -3 ]} 
            color="yellow" 
            bevelEnabled 
            bevelThickness={0.3}
          >
            {config.jobless.dynamicTitle}
          </SectionTitle>
        </Float>

        <SectionTitle 
          size={0.5} 
          position={[ 0, 1.2, -3 ]} 
          rotation-y={-0.2} 
          bevelEnabled 
          bevelThickness={0.3}
        >
          {config.jobless.staticTitle}
        </SectionTitle>
      </group>
    </>
  );
};
