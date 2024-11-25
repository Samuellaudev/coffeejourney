import React from 'react'
import { RoundedBox } from '@react-three/drei'
import { useTexture } from '@react-three/drei'

export function PhotoBoxOne(props) {
  const texture = useTexture('textures/PresentationPhotos/Group_1.png')

  return (
    <RoundedBox args={[1, 1, 1]} smoothness={2} { ...props }>
      <meshStandardMaterial map={texture} />
    </RoundedBox>
  )
}

useTexture.preload("textures/PresentationPhotos/Group_1.png")