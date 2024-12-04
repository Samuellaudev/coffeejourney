import { Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';
import { CoffeeGrinder } from './CoffeeGrinder';
import { CoffeeMachine } from './CoffeeMachine';
import { PhotoBoxOne } from './PhotoBoxOne';
import { PhotoBoxTwo } from './PhotoBoxTwo';
import { CoreDrinks } from './CoreDrinks';
import { ExpandableText } from '../ExpandableText';

export const Essentials = () => {
  return (
    <>
      {/* Left Group - Photo Boxes */ }
      <group position={ [-2, -0.5, 0] }>
        <Float floatIntensity={ 0.3 }>
          <PhotoBoxOne
            scale={ 0.8 }
            position={ [1.1, 2, 0] }
            rotation-y={ 0.3 }
          />
          <PhotoBoxTwo />
        </Float>
        <ExpandableText
          content="During the program, we learned a wide range of things about coffee, from the anatomy of espresso machines and grinders to the techniques for making six essential café-style coffee drinks, including mastering milk texturing, latte art, and understanding the importance of water quality, extraction timing, and grind size in achieving the perfect cup."
          typingSpeed={ 20 }
          maxLength={ 37 }
          textSize={ 0.09 }
          groupPosition={ [0, 0.3, 1] }
          initialPosition={ [0.1, 1, 0] }
          smallTextPosition={ [0.1, 0.9, 0] }
          planeInitialSize={ [3.5, 0.6] }
          planeExpandedSize={ [2, 0.6] }
          expandedTextLength={ 2 }
        />
      </group>

      {/* Right Group - Coffee Machine, Grinder, Section Title, and Core Drinks */ }
      <group position={ [0.5, 0, 0] } rotation-y={ -0.3 }>
        <Float floatIntensity={ 0.6 }>
          <SectionTitle
            size={ 0.4 }
            position={ [0, 2, -1] }
            bevelEnabled
            bevelThickness={ 0.3 }
            color="yellow"
          >
            { config.essentials.title }
          </SectionTitle>
        </Float>

        <CoffeeMachine
          scale={ 1 }
          position={ [0.8, 1.05, -0.8] }
        />

        <CoffeeGrinder
          scale={ 0.03 }
          position={ [1.55, 1.36, -0.8] }
        />

        <RoundedBox
          scale={ [1.8, 1, 1] }
          position={ [1, 0.5, -1] }
        >
          <meshStandardMaterial color="white" />
        </RoundedBox>

        <Float floatIntensity={ 0.3 }>
          <CoreDrinks
            scale={ 3 }
            position={ [1, 0.3, 0] }
            rotation-x={ 0.6 }
          />
        </Float>
      </group>
    </>
  );
};
