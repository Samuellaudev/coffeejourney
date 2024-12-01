import { Center, Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeShop } from '../Period_Before/CoffeeShop';
import { config } from '../../config';
import { Billboard } from './Billboard';
import { EmojiHappy } from './EmojiHappy';

export const WellGrounded = () => {
  return (
    <>
      {/* Left Group - Titles */} 
      <group position-x={0.5} rotation-y={Math.PI / 6}>
        <Float floatIntensity={0.6}>
          <Center disableY disableZ>
            <SectionTitle
              size={0.6}
              position={[-1.8, 2.2, -3]}
              color="#d45b69"
              bevelEnabled
              bevelThickness={0.3}
            >
              {config.wellGrounded.dynamicTitle}
            </SectionTitle>
          </Center>
        </Float>

        <SectionTitle
          size={0.5}
          position={[-3, 1.2, -3]}
          bevelEnabled
          bevelThickness={0.3}
        >
          {config.wellGrounded.staticTitle}
        </SectionTitle>
      </group>

      {/* Right Group - Emoji, Billboard, and Coffee Shop */} 
      <group position-z={-2} rotation-y={-0.6}>
        <Float floatIntensity={0.6}>
          <EmojiHappy
            scale={0.5}
            position={[1.5, 2.8, -2.3]}
            rotation-y={-1.8}
          />
        </Float>

        <Billboard
          scale={0.4}
          position={[3.5, 0.1, 1]}
        />

        <CoffeeShop
          scale={13}
          position={[2.4, 0, -1.5]}
        />
      </group>
    </>
  );
};
