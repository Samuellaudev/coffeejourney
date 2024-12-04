import { Center, Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';
import { PhotoBoxThree } from './PhotoBoxThree';
import { PhotoBoxFour } from './PhotoBoxFour';
import { Milks } from './Milks';
import { MilkJug } from './MilkJug';
import { ExpandableText } from '../ExpandableText';

export const Master = () => {
  return (
    <>
      {/* Left Group - Section Title, Milks, and Milk Jug */ }
      <group position={ [-1, 0, 0] } rotation-y={ Math.PI / 6 }>
        <Float floatIntensity={ 0.6 }>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.6 }
              position={ [-1.3, 2.2, -3] }
              bevelEnabled
              bevelThickness={ 0.3 }
              color="#FFAC1C"
            >
              { config.master.title }
            </SectionTitle>
          </Center>
        </Float>

        <Milks
          scale={ 0.5 }
          position={ [-0.4, 0.6, -1.8] }
          rotation-y={ -1.5 }
        />

        <Float floatIntensity={ 0.6 }>
          <MilkJug
            scale={ 0.3 }
            position={ [-1, 0.4, 0] }
            rotation-x={ 0.2 }
          />
        </Float>
      </group>

      {/* Right Group - Photo Boxes */ }
      <group position={ [2, -0.5, 0] }>
        <Float floatIntensity={ 0.3 }>
          <PhotoBoxThree />
          <PhotoBoxFour />
        </Float>

        <ExpandableText
          content="The technical accreditation we acquired from the Specialty Coffee Association not only validated our skills but also gave us a solid foundation in coffee brewing techniques, quality control, and industry standards, boosting our confidence as we prepared to enter the professional world of specialty coffee."
          typingSpeed={ 20 }
          maxLength={ 37 }
          textSize={ 0.09 }
          groupPosition={ [0, 0.2, 1] }
          initialPosition={ [0.1, 1, 0] }
          smallTextPosition={ [0.1, 0.9, 0] }
          planeInitialSize={ [3.5, 0.6] }
          planeExpandedSize={ [2, 0.6] }
          expandedTextLength={ 2 }
        />
      </group>
    </>
  );
};
