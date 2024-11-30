import { RoundedBox } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PhotoBoxTen() {
  const texture = useTexture('textures/WellGrounded.png')

  return (
    <group
      scale={1.5}
      position-x={ 0.4 }
      position-y={ 1 }
      position-z={ -0.5 }
      rotation-y={ -0.2 }
    >
      <RoundedBox args={ [0.75, 0.75, 0.1] } smoothness={ 4 } >
        <meshStandardMaterial color="white" />
      </RoundedBox>
      {/* The photo texture is applied only to one side of the frame */ }
      <mesh position={ [0, 0, 0.06] } rotation={ [0, 0, 0] } scale={ 1 }>
        <planeGeometry args={ [0.6, 0.6] } />
        <meshStandardMaterial map={ texture } />
      </mesh>
    </group>
  )
}

useTexture.preload("textures/WellGrounded.png")