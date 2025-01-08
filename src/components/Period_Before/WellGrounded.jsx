import { useMobile } from '../../hooks/useMobile';
import { Center, Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeShop } from '../Period_Before/CoffeeShop';
import { config } from '../../config';
import { Billboard } from './Billboard';
import { EmojiHappy } from './EmojiHappy';
import { ExpandableText } from '../ExpandableText';

export const WellGrounded = () => {
  const { isMobile, scaleFactor } = useMobile()

  return (
    <>
      {/* Left Group - Titles */ }
      <group
        scale={ isMobile ? 0.8 : 1 }
        position={ isMobile ? [0.3, 0, -5] : [0.5, 0, 0] }
        rotation-y={ Math.PI / 6 }
      >
        <Float floatIntensity={ 0.6 }>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.6 }
              position={ [-1.8, 2.2, -3] }
              color="#d45b69"
              bevelEnabled
              bevelThickness={ 0.3 }
            >
              { config.wellGrounded.dynamicTitle }
            </SectionTitle>
          </Center>
        </Float>

        <SectionTitle
          size={ 0.5 }
          position={ [-3, 1.2, -3] }
          bevelEnabled
          bevelThickness={ 0.3 }
        >
          { config.wellGrounded.staticTitle }
        </SectionTitle>
      </group>

      {/* Right Group - Emoji, Billboard, and Coffee Shop */ }
      <group
        rotation-y={ -0.6 }
        scale={ isMobile ? 0.8 : 1 }
        position={ isMobile ? [-0.4, 0, -6] : [0, 0, -2] }
      >
        <Float floatIntensity={ 0.6 }>
          <EmojiHappy
            scale={ 0.5 }
            position={ [1.5, 2.8, -2.3] }
            rotation-y={ -1.8 }
          />
        </Float>

        <Billboard
          scale={ 0.4 }
          position={ [3.5, 0.1, 1] }
        />

        <CoffeeShop
          scale={ 13 }
          position={ [2.4, 0, -1.5] }
        />
      </group>

      <ExpandableText
        content="Luckily, I found Well Grounded! In Hong Kong, it's rare for organizations to offer free employment programs to participants, so I was skeptical at first. But guess what? My coffee journey had just begun!"
        typingSpeed={ 15 }
        maxLength={ 37 }
        initialPosition={ [0.1, 1, 0] }
        smallTextPosition={ [0.1, 0.9, 0] }
        textSize={ isMobile ? 0.07 : 0.09 }
        groupPosition={ isMobile ? [-0.2, -0.8, 4] : [1.3, 0.3, 0.4] }
        planeInitialSize={ [3.5, 0.6] }
        planeExpandedSize={ isMobile ? [1.2, 0.4] : [2, 0.5] }
        expandedTextLength={ isMobile ? 1.2 : 2 }
      />
    </>
  );
};
