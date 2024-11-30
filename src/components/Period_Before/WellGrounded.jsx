import { Center, Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeShop } from '../Period_Before/CoffeeShop';
import { config } from '../../config';
import { Billboard } from './Billboard';
import { EmojiHappy } from './EmojiHappy';

export const WellGrounded = () => {
  return (
    <>
      {/* Left group */ }
      <group position-x={ 0.5 } rotation-y={ Math.PI / 6 }>
        <Float floatIntensity={ 0.6 }>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.6 }
              position-x={ -1.8 }
              position-y={ 2.2 }
              position-z={ -3 }
              bevelEnabled
              bevelThickness={ 0.3 }
              color="#d45b69"
            >
              { config.wellGrounded.dynamicTitle }
            </SectionTitle>
          </Center>
        </Float>
        <SectionTitle
          size={ 0.5 }
          position-x={ -3 }
          position-y={ 1.2 }
          position-z={ -3 }
          bevelEnabled
          bevelThickness={ 0.3 }
        >
          { config.wellGrounded.staticTitle }
        </SectionTitle>
      </group>
      {/* Right group */ }
      <group
        position-z={ -2 }
        rotation-y={ -0.6 }
      >
        <Float floatIntensity={ 0.6 }>
          <EmojiHappy
            scale={ 0.5 }
            position-y={ 2.8 }
            position-x={ 1.5 }
            position-z={ -2.3 }
            rotation-y={ -1.8 }
          />
        </Float>
        <Billboard
          scale={ 0.4 }
          position-x={ 3.5 }
          position-y={ 0.1 }
          position-z={ 1 }
        />
        <CoffeeShop
          scale={ 13 }
          position-x={ 2.4 }
          position-z={ -1.5 }
        />
      </group>
    </>
  )
}
