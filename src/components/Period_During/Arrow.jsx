/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Arrow.glb -o src/components/Arrow.jsx -r public 
Author: plaggy (https://sketchfab.com/plaggy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cc0-arrow-5-f38febed165240b9aea5289c215c6b65
Title: CC0 - Arrow 5
*/

import React, { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Arrow(props) {
  const { nodes, materials } = useGLTF('/models/Arrow.glb')

  const [position, setPosition] = useState(0) // Initial position
  const [direction, setDirection] = useState(1) // 1 for moving forward, -1 for moving backward

  // Set the color of the arrow
  useEffect(() => {
    if (materials.Arrow5) {
      materials.Arrow5.color.set('#00FF7F')
    }
  }, [materials])

  // Animation logic using useFrame
  useFrame(() => {
    setPosition((prevPosition) => {
      const moveAmount = 0.002 // Movement per frame

      // Update the position based on direction
      const newPosition = prevPosition + moveAmount * direction

      // Reverse direction if we reach the limits (-0.05 to 0.05 range)
      if (newPosition >= 0.05 || newPosition <= -0.05) {
        setDirection(direction * -1) // Reverse direction
      }

      return newPosition
    })
  })

  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.Arrow5_Arrow5_0.geometry} 
        material={materials.Arrow5} 
        rotation={[-Math.PI / 2, 0, 0]} 
        scale={0.025} 
        position={[position, 0, 0]} // Apply the animated position
      />
    </group>
  )
}

useGLTF.preload('/models/Arrow.glb')



