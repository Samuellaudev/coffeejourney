import { Center, Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';

import { PhotoBoxThree } from './PhotoBoxThree';
import { PhotoBoxFour } from './PhotoBoxFour';

import { Milks } from './Milks';
import { MilkJug } from './MilkJug';

export const Master = () => {
  return (
    <>
      <group
        position-x={ -1 }
        rotation-y={ Math.PI / 6 }
      >
        <Float floatIntensity={ 0.6 }>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.6 }
              position-x={ -1.3 }
              position-y={ 2.2 }
              position-z={ -3 }
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
          position-x={ -0.4 }
          position-y={ 0.6 }
          position-z={ -1.8 }
          rotation-y={ -1.5 }
        />
        <Float floatIntensity={ 0.6 }>
          <MilkJug
            scale={ 0.3 }
            position-y={ 0.4 }
            position-x={ -1 }
            rotation-x={ 0.2 }
          />
        </Float>
      </group>
      <group
        position-x={ 2 }
        position-y={ -0.5 }
      >
        <Float floatIntensity={ 0.3 }>
          <PhotoBoxThree />
          <PhotoBoxFour />
        </Float>
      </group>
    </>
  )
}