import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeMenu } from './CoffeeMenu';
import { Lamp } from './Lamp';
import { PhotoBoxFive } from './PhotoBoxFive';
import { PhotoBoxSix } from './PhotoBoxSix';
import { ExpandableText } from '../ExpandableText';

export const Skills = () => {
  return (
    <group position={ [-2, 0, 0] }>
      {/* Section Title */ }
      <SectionTitle
        scale={ 1.5 }
        position={ [0, 0.1, 1.5] }
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
        <PhotoBoxFive />
        <PhotoBoxSix />
      </Float>

      {/* Lamp */ }
      <Lamp
        position={ [-0.4, -0.8, 0.6] }
        rotation-y={ -Math.PI }
      />

      <ExpandableText
        content="Besides operating an espresso machine and mastering techniques for preparing various coffee drinks, we were also required to uphold high standards of cleanliness and workspace management. Additionally, the importance of good customer service in the catering industry was consistently emphasized."
        typingSpeed={ 20 }
        maxLength={ 37 }
        textSize={ 0.09 }
        groupPosition={ [0.5, -0.1, 0.9] }
        initialPosition={ [0.1, 1, 0] }
        smallTextPosition={ [0.1, 0.9, 0] }
        planeInitialSize={ [3.5, 0.6] }
        planeExpandedSize={ [2, 0.6] }
        expandedTextLength={ 2 }
      />
    </group>
  );
};
