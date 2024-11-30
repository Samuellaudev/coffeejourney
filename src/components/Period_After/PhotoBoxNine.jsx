import { RoundedBox } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PhotoBoxNine() {
  const texture = useTexture('textures/PresentationPhotos/WoganLogo.webp')

  return (
    <group
      scale={1.3}
      position-x={ 1.9 }
      position-y={ 1 }
      position-z={ -0.5 }
      rotation-y={ -0.2 }
    >
      <RoundedBox args={ [1, 0.9, 0.1] } smoothness={ 4 } >
        <meshStandardMaterial color="white" />
      </RoundedBox>
      {/* The photo texture is applied only to one side of the frame */ }
      <mesh position={ [0, 0, 0.06] } rotation={ [0, 0, 0] } scale={ 1 }>
        <planeGeometry args={ [0.8, 0.6] } />
        <meshStandardMaterial map={ texture } />
      </mesh>
    </group>
  )
}

useTexture.preload("textures/PresentationPhotos/WoganLogo.webp")