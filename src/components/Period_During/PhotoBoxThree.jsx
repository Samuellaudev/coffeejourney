import React from 'react'
import { RoundedBox } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PhotoBoxThree() {
  const texture = useTexture('textures/PresentationPhotos/Classroom_2.png')

  return (
    <group
      position-x={ 1 }
      position-y={ 2 }
      rotation-y={ -0.1 }
      scale={ 1.2}
    >
      <RoundedBox args={ [1, 1.8, 0.1] } smoothness={ 4 } >
        <meshStandardMaterial color="white" />
      </RoundedBox>
      {/* The photo texture is applied only to one side of the frame */ }
      <mesh position={ [0, 0, 0.06] } rotation={ [0, 0, 0] } scale={ 1.05 }>
        <planeGeometry args={ [0.8, 1.6] } />
        <meshStandardMaterial map={ texture } />
      </mesh>
    </group>
  )
}

useTexture.preload("textures/PresentationPhotos/Classroom_2.png")