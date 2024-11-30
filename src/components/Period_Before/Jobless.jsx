import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';
import { BookCase } from '../Period_During/BookCase';
import { CouchSmall } from '../Period_During/CouchSmall';
import { Lamp } from '../Period_During/Lamp';
import { EmojiSad } from '../Period_Before/EmojiSad';

export const Jobless = () => {
  return (
    <>
      {/* Left group */ }
      <group position-x={ -2 }>
        <Float floatIntensity={ 0.6 }>
          <EmojiSad
            position-y={ 3.3 }
            rotation-y={ 0.2 }
          />
        </Float>
        <BookCase position-z={ -2 } />
        <CouchSmall
          scale={ 0.4 }
          position-z={ 0 }
          position-x={ -0.2 }
          rotation-y={ Math.PI / 3 }
        />
        <Lamp
          position-z={ 0.6 }
          position-x={ -0.4 }
          position-y={ -0.8 }
          rotation-y={ -Math.PI }
        />
      </group>
      {/* Right group */ }
      <group
        position-x={ 0.1 }
        rotation-y={ -0.3 }
      >
        <Float floatIntensity={ 0.6 }>
          <SectionTitle
            size={ 0.7 }
            position-x={ 0.1 }
            position-y={ 2.3 }
            position-z={ -3 }
            bevelEnabled
            bevelThickness={ 0.3 }
            color="yellow"
          >
            { config.jobless.dynamicTitle }
          </SectionTitle>
        </Float>
        <SectionTitle
          size={ 0.5 }
          position-y={ 1.2 }
          position-z={ -3 }
          rotation-y={ -0.2 }
          bevelEnabled
          bevelThickness={ 0.3 }
        >
          { config.jobless.staticTitle }
        </SectionTitle>
      </group>
    </>
  )
}