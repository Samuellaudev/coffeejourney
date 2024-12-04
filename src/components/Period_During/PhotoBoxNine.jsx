import { RoundedBox, useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';

export function PhotoBoxNine() {
  const texture = useTexture(
    useMemo(() => 'textures/PresentationPhotos/WorkPlacement_2.jpg', [])
  );

  return (
    <group
      scale={ 1 }
      position={ [-0.5, 1.3, 0.3] }
      rotation={ [-0.1, 0.5, 0] }
    >
      <RoundedBox args={ [1.2, 1.2, 0.1] } smoothness={ 4 }>
        <meshStandardMaterial color="white" roughness={ 0.5 } />
      </RoundedBox>
      {/* The photo texture is applied only to one side of the frame */ }
      <mesh position={ [0, 0, 0.06] } rotation={ [0, 0, 0] } scale={ 1 }>
        <planeGeometry args={ [1, 1] } />
        <meshStandardMaterial map={ texture } />
      </mesh>
    </group>
  );
}

useTexture.preload('textures/PresentationPhotos/WorkPlacement_2.jpg');
