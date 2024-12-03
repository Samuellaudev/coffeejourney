import { Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { Airplane } from './Airplane';
import { Flag } from './Flag';
import { AvatarSophie } from '../AvatarSophie';
import { ExpandableText } from '../ExpandableText';

export const FlyToUk = () => {
  return (
    <>
      {/* Group containing the SectionTitle and Flag */ }
      <group position-x={ -2.1 }>
        <SectionTitle
          position-x={ -0.4 }
          position-y={ 0.2 }
          position-z={ 1.5 }
          rotation-y={ Math.PI / 6 }
          color="#7586d9"
        >
          Flight To UK
        </SectionTitle>

        <group rotation-y={ Math.PI / 6 }>
          <Flag scale={ 0.6 } position-y={ 0.6 } />
          <RoundedBox scale={ [1.5, 0.5, 1] } position-y={ 0.3 } position-z={ -1 }>
            <meshStandardMaterial color="white" />
          </RoundedBox>
        </group>
      </group>

      <AvatarSophie position-x={ 1 } />

      {/* Floating Airplane */ }
      <Float floatIntensity={ 1.5 } speed={ 2 }>
        <Airplane
          position={ [2, 1.8, -0.5] }
          rotation-y={ Math.PI / 6 }
          scale={ 0.03 }
        />
      </Float>

      <ExpandableText
        content="Due to the political events that took place in Hong Kong in 2019, I decided to migrate to the UK with my wife on a BNO (British National (Overseas)) visa, which allows both of us to work, live, and start a new life here legally!"
        typingSpeed={ 20 }
        maxLength={ 37 }
        textSize={ 0.09 }
        initialPosition={ [0.1, 1, 0] }
        smallTextPosition={ [0.1, 0.9, 0] }
        planeInitialSize={ [3.5, 0.6] }
        planeExpandedSize={ [2, 0.5] }
        groupPosition={ [2.3, 0, 0] }
        expandedTextLength={ 2 }
      />
    </>
  );
};
