import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CustomText } from '../CustomText';
import { CoffeeShopGather } from './CoffeeShopGather';
import { PhotoBoxSeven } from './PhotoBoxSeven';
import { PhotoBoxEight } from './PhotoBoxEight';
import { PhotoBoxNine } from './PhotoBoxNine';
import { Arrow } from './Arrow';
import { ExpandableText } from '../ExpandableText';

export const WorkPlacement = () => {
  return (
    <>
      {/* Left group for titles and coffee shop image */ }
      <group position={ [-2, 0, 0] }>
        <group scale={ 1 } position={ [-0.2, -0.2, 1.5] } rotation-y={ Math.PI / 6 }>
          <SectionTitle position-y={ 0.7 } color="#508182">
            Work
          </SectionTitle>
          <SectionTitle position-y={ 0.3 } color="#508182">
            Placement
          </SectionTitle>
        </group>
        <CoffeeShopGather
          scale={ 0.6 }
          position={ [-0.6, 0, -2] }
          rotation-y={ -0.3 }
        />
        <Float floatIntensity={ 2 } position={ [0, 0.5, 0] }>
          <PhotoBoxSeven />
        </Float>
        <Float floatIntensity={ 1 } >
          <PhotoBoxNine />
        </Float>
        <ExpandableText
          content="In the second half of the program, I had the chance to complete a six-day work placement, each shift lasting six hours. I'm so grateful for the opportunity—it really helped level up my skills as a barista. The hands-on experience gave me a chance to apply everything I learned in real-life situations, boosting my confidence and refining my craft."
          typingSpeed={ 20 }
          maxLength={ 37 }
          textSize={ 0.09 }
          groupPosition={ [1, 0.2, 1] }
          initialPosition={ [0.1, 1, 0] }
          smallTextPosition={ [0.1, 0.9, 0] }
          planeInitialSize={ [3.3, 0.6] }
          planeExpandedSize={ [2, 0.6] }
          expandedTextLength={ 2 }
        />
      </group>

      {/* Right group for floating photos and labeled arrows */ }
      <group position={ [0, 0, 0] }>
        <Float floatIntensity={ 1 } speed={ 1.5 }>
          <PhotoBoxEight />
        </Float>

        { arrowTextData.map((block, index) => (
          <ArrowTextBlock key={ index } { ...block } />
        )) }
      </group>
    </>
  );
};

const arrowTextData = [
  {
    position: [0, 0.3, -0.2],
    arrowPosition: [1.5, 2, 0],
    text: "Espresso Machine Operation"
  },
  {
    position: [2, 0.1, 0],
    arrowPosition: [1.5, 2, 0],
    text: "Coffee Preparation Techniques"
  },
  {
    position: [-0.2, -0.7, 0],
    arrowPosition: [1.5, 2, 0],
    boxShape: [0.8, 0.4, 0.1],
    text: "Cleaning and Maintenance"
  },
  {
    position: [2.1, -1.5, 0],
    arrowPosition: [1.5, 2, 0],
    boxShape: [0.8, 0.4, 0.1],
    text: "Customer Service"
  },
  {
    position: [0.1, -1.6, 0],
    arrowPosition: [1.5, 2, 0],
    boxShape: [0.8, 0.4, 0.1],
    text: "Latte Art Skills"
  }
];

const ArrowTextBlock = ({
  position,
  arrowPosition,
  text,
  textMaxWidth = 1,
  boxShape = [1, 0.4, 0.1],
  boxSmoothness = 1,
  fontSize = 0.1,
  textColor = "green"
}) => {
  return (
    <group position={ position }>
      <Arrow scale={ 2 } position={ arrowPosition } rotation-z={ 1 } />
      <CustomText
        position={ [1, 2, -0.1] }
        fontSize={ fontSize }
        textColor={ textColor }
        textMaxWidth={ textMaxWidth }
        boxShape={ boxShape }
        boxSmoothness={ boxSmoothness }
      >
        { text }
      </CustomText>
    </group>
  );
};
