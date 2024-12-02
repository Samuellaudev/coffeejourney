import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function ThumbUp(props) {
  const { nodes, materials } = useGLTF('/models/ThumbUp.glb')

  React.useMemo(() => {
    materials['Color_-_Skin_Hand'].color = new THREE.Color('#FFBF00')
    materials['Color_-_Red_Grad'].color = new THREE.Color('#FFBF00')
  }, [materials])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['thumnb_up_Color_-_Red_Grad_0'].geometry} material={materials['Color_-_Red_Grad']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['thumnb_up_Color_-_Skin_Hand_0'].geometry} material={materials['Color_-_Skin_Hand']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.thumnb_up_Silver_Metal_0.geometry} material={materials.Silver_Metal} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/ThumbUp.glb')
