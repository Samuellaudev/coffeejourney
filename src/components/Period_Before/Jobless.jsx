import { Center, Float, MeshDistortMaterial } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';
import { BookCase } from '../Period_During/BookCase';
import { CouchSmall } from '../Period_During/CouchSmall';
import { Lamp } from '../Period_During/Lamp';
import { EmojiSad } from '../Period_Before/EmojiSad';

export const Jobless = () => {
  return (
    <>
      <group position-x={ -2 }>
        <Float floatIntensity={ 0.6 }>
          <EmojiSad
            position-y={ 3.5 }
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
      <group
        position-x={ 1 }
        rotation-y={ -0.3 }
      >
        <Float floatIntensity={ 0.6 }>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.7 }
              position-y={ 1.6 }
              position-z={ -3 }
              bevelEnabled
              bevelThickness={ 0.3 }
            >
              { config.jobless.dynamicTitle }
            </SectionTitle>
          </Center>
        </Float>
        <Center disableY disableZ>
          <SectionTitle
            size={ 0.5 }
            position-x={ 1 }
            position-y={ 0.3 }
            position-z={ -3 }
            bevelEnabled
            bevelThickness={ 0.3 }
          >
            { config.jobless.staticTitle }
          </SectionTitle>
        </Center>
      </group>
    </>
  )
}