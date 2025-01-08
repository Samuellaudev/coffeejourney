import { useMobile } from '../../hooks/useMobile';
import { Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { Airplane } from './Airplane';
import { Flag } from './Flag';
import { AvatarSophie } from '../AvatarSophie';
import { ExpandableText } from '../ExpandableText';

export const FlyToUk = () => {
  const { isMobile, scaleFactor } = useMobile()

  return (
    <>
      {/* Group containing the SectionTitle and Flag */ }
      <group
        position-x={ isMobile ? -1.5 : -2.1 }
        position-z={ isMobile ? -4 : 0 }
      >
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

      <AvatarSophie position-x={ isMobile ? 1.1 : 1 } position-z={ isMobile ? -1 : 0 } />

      {/* Floating Airplane */ }
      <Float floatIntensity={ 1.5 } speed={ 2 }>
        <Airplane
          position={ isMobile ? [0.5, 2.3, -4] : [2, 1.8, -0.5] }
          rotation-y={ Math.PI / 6 }
          scale={ 0.03 }
        />
      </Float>

      <ExpandableText
        content="Due to the political events that took place in Hong Kong in 2019, I decided to migrate to the UK with my wife on a BNO (British National (Overseas)) visa, which allows both of us to work, live, and start a new life here legally!"
        typingSpeed={ 15 }
        maxLength={ 37 }
        initialPosition={ [0.1, 1, 0] }
        smallTextPosition={ [0.1, 0.9, 0] }
        textSize={ isMobile ? 0.07 : 0.09 }
        groupPosition={ isMobile ? [-0.1, -0.8, 4] : [2.3, 0, 0] }
        planeInitialSize={ isMobile ? [3.5, 0.8] : [3.5, 0.6] }
        planeExpandedSize={ isMobile ? [1.2, 0.5] : [2, 0.5] }
        expandedTextLength={ isMobile ? 1.2 : 2 }
      />
    </>
  );
};
