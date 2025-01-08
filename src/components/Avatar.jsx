/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/673e60132ba627d4da664fb2.glb -o src/components/Avatar.jsx -k -r public 
*/

import React, { useEffect, useRef, useState } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useFBX, useAnimations, useScroll } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useAtom } from 'jotai';
import { scrollAtom } from '../config/scrollAtom';
import { useMobile } from '../hooks/useMobile';

import * as THREE from "three";

export function Avatar(props) {
  // Load GLTF model
  const { scene } = useGLTF('/models/673e60132ba627d4da664fb2.glb')
  // Clone the scene to prevent modifying the original instance
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  // Extract nodes and materials for direct use
  const { nodes, materials } = useGraph(clone)

  const { isMobile } = useMobile()

  // Load animations for idle and walking states
  const { animations: idleAnimation } = useFBX('/animations/Idle.fbx')
  const { animations: walkingAnimation } = useFBX('/animations/Walking.fbx')

  // Assign readable names to animation clips for clarity
  idleAnimation[0].name = "Idle";
  walkingAnimation[0].name = "Walking";

  // Ref to the group containing the Avatar
  const group = useRef()
  // Handle animations using useAnimations hook
  const { actions } = useAnimations(
    [idleAnimation[0], walkingAnimation[0]],
    group
  );

  // Manage the current animation state
  const [animation, setAnimation] = useState("Idle")
  // Scroll-based animation handling
  const scrollData = useScroll();
  const lastScroll = useRef(0)

  const [, setScroll] = useAtom(scrollAtom);

  useFrame(() => {
    // Calculate scroll movement
    const scrollDelta = scrollData.offset - lastScroll.current;
    // Initialize rotation target for character direction
    let rotationTarget = 0

    // Determine animation state based on scroll delta
    if (Math.abs(scrollDelta) > 0.00001) {
      setAnimation("Walking");

      // Rotate to face scroll direction
      if (scrollDelta > 0) {
        rotationTarget = isMobile ? Math.PI / 2 : 0
      } else {
        rotationTarget = isMobile ? -Math.PI / 2 : Math.PI;
      }
    } else {
      setAnimation("Idle");
    }

    // Smoothly interpolate character rotation
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      rotationTarget,
      0.1 // Adjust smoothing factor for responsiveness
    );
    // Update scroll position
    lastScroll.current = scrollData.offset;

    setScroll(scrollData.offset);
  });

  // Effect for managing animation transitions
  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play()
    return () => actions[animation].fadeOut(0.5)
  }, [animation])

  return (
    <group { ...props } dispose={ null } ref={ group }>
      <primitive object={ nodes.Armature } />
      <skinnedMesh name="Wolf3D_Hair" geometry={ nodes.Wolf3D_Hair.geometry } material={ materials.Wolf3D_Hair } skeleton={ nodes.Wolf3D_Hair.skeleton } />
      <skinnedMesh name="Wolf3D_Glasses" geometry={ nodes.Wolf3D_Glasses.geometry } material={ materials.Wolf3D_Glasses } skeleton={ nodes.Wolf3D_Glasses.skeleton } />
      <skinnedMesh name="Wolf3D_Body" geometry={ nodes.Wolf3D_Body.geometry } material={ materials.Wolf3D_Body } skeleton={ nodes.Wolf3D_Body.skeleton } />
      <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={ nodes.Wolf3D_Outfit_Bottom.geometry } material={ materials.Wolf3D_Outfit_Bottom } skeleton={ nodes.Wolf3D_Outfit_Bottom.skeleton } />
      <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={ nodes.Wolf3D_Outfit_Footwear.geometry } material={ materials.Wolf3D_Outfit_Footwear } skeleton={ nodes.Wolf3D_Outfit_Footwear.skeleton } />
      <skinnedMesh name="Wolf3D_Outfit_Top" geometry={ nodes.Wolf3D_Outfit_Top.geometry } material={ materials.Wolf3D_Outfit_Top } skeleton={ nodes.Wolf3D_Outfit_Top.skeleton } />
      <skinnedMesh name="EyeLeft" geometry={ nodes.EyeLeft.geometry } material={ materials.Wolf3D_Eye } skeleton={ nodes.EyeLeft.skeleton } morphTargetDictionary={ nodes.EyeLeft.morphTargetDictionary } morphTargetInfluences={ nodes.EyeLeft.morphTargetInfluences } />
      <skinnedMesh name="EyeRight" geometry={ nodes.EyeRight.geometry } material={ materials.Wolf3D_Eye } skeleton={ nodes.EyeRight.skeleton } morphTargetDictionary={ nodes.EyeRight.morphTargetDictionary } morphTargetInfluences={ nodes.EyeRight.morphTargetInfluences } />
      <skinnedMesh name="Wolf3D_Head" geometry={ nodes.Wolf3D_Head.geometry } material={ materials.Wolf3D_Skin } skeleton={ nodes.Wolf3D_Head.skeleton } morphTargetDictionary={ nodes.Wolf3D_Head.morphTargetDictionary } morphTargetInfluences={ nodes.Wolf3D_Head.morphTargetInfluences } />
      <skinnedMesh name="Wolf3D_Teeth" geometry={ nodes.Wolf3D_Teeth.geometry } material={ materials.Wolf3D_Teeth } skeleton={ nodes.Wolf3D_Teeth.skeleton } morphTargetDictionary={ nodes.Wolf3D_Teeth.morphTargetDictionary } morphTargetInfluences={ nodes.Wolf3D_Teeth.morphTargetInfluences } />
    </group>
  )
}

// Preload resources for better performance
useGLTF.preload('/models/673e60132ba627d4da664fb2.glb')
useFBX.preload('/animations/Idle.fbx')
useFBX.preload('/animations/Walking.fbx')
