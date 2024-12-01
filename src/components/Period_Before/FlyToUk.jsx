import { Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { Airplane } from './Airplane';
import { Flag } from './Flag';
import { AvatarSophie } from '../AvatarSophie';

export const FlyToUk = () => {
  return (
    <>
      {/* Group containing the SectionTitle and Flag */}
      <group position-x={-2.1}>
        <SectionTitle
          position-x={-0.4}
          position-y={0.2}
          position-z={1.5}
          rotation-y={Math.PI / 6}
          color="#7586d9"
        >
          Flight To UK
        </SectionTitle>

        <group rotation-y={Math.PI / 6}>
          <Flag scale={0.6} position-y={0.6} />
          <RoundedBox scale={[1.5, 0.5, 1]} position-y={0.3} position-z={-1}>
            <meshStandardMaterial color="white" />
          </RoundedBox>
        </group>
      </group>

      <AvatarSophie position-x={1} />

      {/* Floating Airplane */}
      <Float floatIntensity={1.5} speed={2}>
        <Airplane
          position={[2, 1.8, -0.5]}
          rotation-y={Math.PI / 6}
          scale={0.03}
        />
      </Float>
    </>
  );
};
