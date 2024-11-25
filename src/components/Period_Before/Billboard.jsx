/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Billboard.glb -o src/components/Billboard.jsx -r public 
Author: ℜ𝔢𝔞𝔩 𝔖𝔩𝔦𝔪 𝔖𝔥𝔞𝔡𝔶 (https://sketchfab.com/real_slimshady)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pavement-sign-a-board-798f88ab8ad24cbabb79507e80ae7108
Title: Pavement Sign (A Board)
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Billboard(props) {
  const { nodes, materials } = useGLTF('/models/Billboard.glb')
  const flagTexture = useTexture('textures/WellGrounded.png')

  return (
    <group { ...props } dispose={ null }>
      <mesh geometry={ nodes['Material0-material-material'].geometry } material={ materials['Material0-material'] } position={ [0.031, 1.107, -0.449] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [1.583, 0.469, 2.225] } />
      <mesh geometry={ nodes['Material1-material-material'].geometry } material={ materials['Material1-material'] } position={ [0.031, 1.107, -0.449] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [1.583, 0.469, 2.225] } />
      <mesh geometry={ nodes['Material2-material-material'].geometry } position={ [0.031, 1.107, -0.449] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [1.583, 0.469, 2.225] } >
        <meshStandardMaterial map={ flagTexture } />
      </mesh>
      <mesh geometry={ nodes['Material3-material-material'].geometry } material={ materials['Material3-material'] } position={ [0.031, 1.107, -0.449] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [1.583, 0.469, 2.225] } />
      <mesh geometry={ nodes['Material4-material-material'].geometry } material={ materials['Material4-material'] } position={ [0.031, 1.107, -0.449] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [1.583, 0.469, 2.225] } />
      <mesh geometry={ nodes['Material7-material-material'].geometry } material={ materials['Material7-material'] } position={ [0.044, 1.08, -0.177] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [2.5, 2.459, 2.28] } />
      <mesh geometry={ nodes['Material8-material-material'].geometry } material={ materials['Material8-material'] } position={ [0.034, 1.107, 0.059] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [1.583, 0.469, 2.225] } />
      <mesh geometry={ nodes['Material6-material-material'].geometry } material={ materials['Material6-material'] } position={ [0.044, 1.08, -0.177] } rotation={ [-Math.PI / 2, 0, 0.005] } scale={ [2.5, 2.459, 2.28] } />
    </group>
  )
}

useGLTF.preload('/models/Billboard.glb')
useTexture.preload("textures/WellGrounded.png");