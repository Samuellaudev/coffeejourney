import React from 'react'
import { RoundedBox } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PhotoBoxSix() {
  const texture = useTexture('textures/PresentationPhotos/Me_2.jpg')

  return (
    <group
      position-x={ 1 }
      position-y={ 1 }
      position-z={ 0.5 }
      rotation-y={ 0.2 }
      scale={ 0.8 }
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

useTexture.preload("textures/PresentationPhotos/Me_2.jpg")