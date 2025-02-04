/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/EmojiHappy.glb -o src/components/EmojiHappy.jsx -r public 
Author: 3dblender_bms (https://sketchfab.com/3dblender_bms)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/emoji-happy-cartoon-bb9ca64167e8448aa3f40adad4cfb774
Title: emoji happy cartoon
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function EmojiHappy(props) {
  const { nodes, materials } = useGLTF('/models/EmojiHappy.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.020']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.024']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.010']} />
    </group>
  )
}

useGLTF.preload('/models/EmojiHappy.glb')
