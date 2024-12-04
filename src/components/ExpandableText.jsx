import { useState, useEffect, useCallback, useRef } from 'react';
import { Text, Plane } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useThree } from '@react-three/fiber';  // Import for raycasting and 3D context
import * as THREE from 'three';  // Import THREE.js

export const ExpandableText = ({
  content,
  typingSpeed = 15,
  maxLength = 20,
  textSize = 0.2,
  initialPosition = [0.1, 1, 0],
  smallTextPosition = [0.1, 0.8, 0],
  planeInitialSize = [4, 0.8],
  planeExpandedSize = [4, 1],
  groupPosition,
  expandedTextLength = 4
}) => {
  const [expanded, setExpanded] = useState(false);
  const [visibleText, setVisibleText] = useState('');
  const groupRef = useRef(null);

  // Raycasting setup
  const { camera, gl } = useThree();

  // Handle text typing effect
  useEffect(() => {
    let timer;
    if (expanded) {
      let index = 0;
      timer = setInterval(() => {
        setVisibleText(content.slice(0, index + 1));
        index++;
        if (index >= content.length) clearInterval(timer);
      }, typingSpeed);
    } else {
      setVisibleText(content.slice(0, maxLength) + '...');
    }

    return () => clearInterval(timer);
  }, [expanded, content, typingSpeed, maxLength]);

  // Memoize the click handler to prevent unnecessary re-renders
  const handleClick = useCallback(() => setExpanded((prev) => !prev), []);

  const handleClickOutside = (event) => {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    // Normalize mouse coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Set up raycasting from the camera with the mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the group
    const intersects = raycaster.intersectObjects([groupRef.current]);

    // If there are no intersections, close the expansion
    if (intersects.length === 0) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  return (
    <motion.group
      scale={ expanded ? 1.2 : 1 }
      animate={ { scale: expanded ? 1.2 : 1 } }
      transition={ { duration: 0.5, ease: 'easeInOut' } }
      onClick={ handleClick }
      pointerEvents="auto"
      position={ groupPosition }
      ref={ groupRef }
      style={{ cursor: 'pointer' }}  // Added cursor styling for better feedback
    >
      {/* Background Plane */}
      <motion.group
        animate={ {
          scaleX: expanded ? 1.1 : 0.5,   // Adjust scale for X (width)
          scaleY: expanded ? 2 : 1,       // Adjust scale for Y (height)
        } }
        transition={ { duration: 0.5, ease: 'easeInOut' } }
      >
        <Plane
          args={ [expanded ? planeExpandedSize[0] : planeInitialSize[0], expanded ? planeExpandedSize[1] : planeInitialSize[1]] }
          position={ [initialPosition[0], expanded ? 0.5 : initialPosition[1], -0.05] }
          onClick={ handleClick }
          style={{ cursor: 'pointer' }}  // Added cursor styling here as well
        >
          <meshBasicMaterial color="white" opacity={ 0.7 } transparent={ true } />
        </Plane>
      </motion.group>

      {/* Main Text */}
      <Text
        fontSize={ textSize }
        color="black"
        anchorX="center"
        anchorY="middle"
        font="/Inter-Bold.ttf"
        position={ [
          initialPosition[0],
          expanded ? initialPosition[1] : initialPosition[1] + 0.1,
          initialPosition[2],
        ] }
        maxWidth={ expanded ? expandedTextLength : 2 }
        textAlign="center"
        lineHeight={ 1.5 }
      >
        { visibleText }
      </Text>

      {/* Small "Click to expand" text */}
      { !expanded && (
        <Text
          fontSize={ 0.08 }
          color="gray"
          anchorX="center"
          anchorY="middle"
          font="/Inter-Bold.ttf"
          position={ smallTextPosition }
          textAlign="center"
        >
          (Click to expand)
        </Text>
      ) }
    </motion.group>
  );
};
