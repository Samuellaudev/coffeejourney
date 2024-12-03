import { useState, useEffect, useCallback } from 'react';
import { Text, Plane } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

export const ExpandableText = ({
  content,
  typingSpeed = 15,
  maxLength = 20,
  textSize = 0.2,
  initialPosition = [0.1, 1, 0],
  smallTextPosition = [0.1, 0.8, 0],
  planeInitialSize = [4, 0.8],
  planeExpandedSize = [4, 1],
  groupPosition
}) => {
  const [expanded, setExpanded] = useState(false);
  const [visibleText, setVisibleText] = useState('');

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

  return (
    <motion.group
      scale={ expanded ? 1.2 : 1 }
      animate={ { scale: expanded ? 1.2 : 1 } }
      transition={ { duration: 0.5, ease: 'easeInOut' } }
      onClick={ handleClick }
      pointerEvents="auto"
      position={ groupPosition }
    >
      {/* Background Plane */ }
      <motion.group
        animate={ {
          scaleX: expanded ? 1.1 : 0.5,   // Adjust scale for X (width)
          scaleY: expanded ? 2 : 1,       // Adjust scale for Y (height)
        } }
        transition={ { duration: 0.5, ease: 'easeInOut' } }
      >
        <Plane
          args={ [planeInitialSize[0], expanded ? planeExpandedSize[1] : planeInitialSize[1]] }  // Adjust the height of the plane
          position={ [initialPosition[0], expanded ? 0.5 : initialPosition[1], -0.05] }  // Adjust the Y position based on expansion
          onClick={ handleClick }
        >
          <meshBasicMaterial color="white" opacity={ 0.4 } transparent={ true } />
        </Plane>
      </motion.group>

      {/* Main Text */ }
      <Text
        fontSize={ textSize }
        color="brown"
        anchorX="center"
        anchorY="middle"
        font="/Inter-Bold.ttf"
        position={ [
          initialPosition[0],
          expanded ? initialPosition[1] : initialPosition[1] + 0.1,
          initialPosition[2],
        ] }
        maxWidth={ expanded ? 4 : 2 }
        textAlign="center"
      >
        { visibleText }
      </Text>

      {/* Small "Click to expand" text */ }
      { !expanded && (
        <Text
          fontSize={ 0.15 }
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
}
