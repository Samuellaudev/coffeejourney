import { useMobile } from '../../hooks/useMobile';
import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeMenu } from './CoffeeMenu';
import { Lamp } from './Lamp';
import { PhotoBoxFive } from './PhotoBoxFive';
import { PhotoBoxSix } from './PhotoBoxSix';
import { ExpandableText } from '../ExpandableText';

export const Skills = () => {
  const { isMobile, scaleFactor } = useMobile()

  return (
    <group
      position={ isMobile ? [-1.4, -0, -4] : [-2, 0, 0] }
    >
      {/* Section Title */ }
      <SectionTitle
        scale={ 1.5 }
        position={ isMobile ? [-0.5, 0.1, 1.5] : [0, 0.1, 1.5] }
        rotation-y={ Math.PI / 6 }
      >
        Skills
      </SectionTitle>

      {/* Coffee Menu */ }
      <CoffeeMenu
        scale={ 1 }
        position={ [-0.2, 1.8, 0] }
        rotation-y={ Math.PI / 4 }
      />

      {/* Floating Photo Boxes */ }
      <Float floatIntensity={ 2 }>
        <group
          position={ isMobile ? [2.5, 0.5, 1] : [0, 0, 0] }
          rotation-y={ -Math.PI / 18 }
        >
          <PhotoBoxFive />
          <PhotoBoxSix />
        </group>
      </Float>

      {/* Lamp */ }
      <Lamp
        position={ [-0.4, -0.8, 0.6] }
        rotation-y={ -Math.PI }
      />

      <ExpandableText
        content="Besides operating an espresso machine and mastering techniques for preparing various coffee drinks, we were also required to uphold high standards of cleanliness and workspace management. Additionally, the importance of good customer service in the catering industry was consistently emphasized."
        typingSpeed={ 15 }
        maxLength={ 37 }
        initialPosition={ [0.1, 1, 0] }
        smallTextPosition={ [0.1, 0.9, 0] }
        textSize={ isMobile ? 0.07 : 0.09 }
        groupPosition={ isMobile ? [1.35, -0.75, 8] : [0.5, -0.1, 0.9] }
        planeInitialSize={ [3.5, 0.6] }
        planeExpandedSize={ isMobile ? [1.6, 0.4] : [2, 0.5] }
        expandedTextLength={ isMobile ? 1.6 : 2 }
      />
    </group>
  );
};
