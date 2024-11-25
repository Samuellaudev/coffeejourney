import { Float } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { CoffeeMenu } from './CoffeeMenu';
import { Lamp } from "./Lamp";
import { PhotoBoxFive } from './PhotoBoxFive';
import { PhotoBoxSix } from './PhotoBoxSix';

export const Skills = () => {
  return (
    <>
      <group position-x={ -2 }>
        <SectionTitle scale={ 1.5 } position-z={ 1.5 } rotation-y={ Math.PI / 6 }>
          Skills
        </SectionTitle>
        <CoffeeMenu
          scale={ 1 }
          position-x={ -0.2 }
          position-y={ 2.2 }
          position-z={ 0 }
          rotation-y={ Math.PI / 4 }
        />
        <Float floatIntensity={ 2 } >
          <PhotoBoxFive />
          <PhotoBoxSix />
        </Float>
        <Lamp
          position-z={ 0.6 }
          position-x={ -0.4 }
          position-y={ -0.8 }
          rotation-y={ -Math.PI }
        />
      </group>
    </>
  )
}