import { RoundedBox, useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';

export function PhotoBoxEight() {
  const texture = useTexture(
    useMemo(() => 'textures/PresentationPhotos/WorkPlacement.jpg', [])
  );

  return (
    <group
      scale={1.2}
      position={[2, 1.3, 0.3]}
      rotation={[-0.1, -0.1, 0]}
    >
      <RoundedBox args={[1, 1.2, 0.1]} smoothness={4}>
        <meshStandardMaterial color="white" roughness={0.5} />
      </RoundedBox>
      {/* The photo texture is applied only to one side of the frame */}
      <mesh position={[0, 0, 0.06]} rotation={[0, 0, 0]} scale={1}>
        <planeGeometry args={[0.8, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

useTexture.preload('textures/PresentationPhotos/WorkPlacement.jpg');
