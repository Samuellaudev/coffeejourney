import { RoundedBox, useTexture } from '@react-three/drei';

useTexture.preload('textures/PresentationPhotos/GatherAndGather.webp');

export function PhotoBoxSeven() {
  const texture = useTexture('textures/PresentationPhotos/GatherAndGather.webp');

  return (
    <group
      scale={ 0.6 }
      position={ [0.9, 1.5, 0.8] }
      rotation-y={ 0.5 }
    >
      <RoundedBox args={ [1, 1.2, 0.1] } smoothness={ 4 }>
        <meshStandardMaterial color="white" />
      </RoundedBox>
      <mesh position={ [0, 0, 0.06] } scale={ 1.05 }>
        <planeGeometry args={ [0.8, 1] } />
        <meshStandardMaterial map={ texture } />
      </mesh>
    </group>
  );
}
