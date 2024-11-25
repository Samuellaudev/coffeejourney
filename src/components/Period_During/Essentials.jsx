import { Center, Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { config } from '../../config';

import { CoffeeGrinder } from './CoffeeGrinder';
import { CoffeeMachine } from './CoffeeMachine';
import { PhotoBoxOne } from './PhotoBoxOne';
import { PhotoBoxTwo } from './PhotoBoxTwo';
import { CoreDrinks } from './CoreDrinks';

export const Essentials = () => {
  return (
    <>
      <group
        position-x={ -2 }
        position-y={ -0.5 }
      >
        <Float floatIntensity={ 0.3 }>
          <PhotoBoxOne
            scale={ 0.8 }
            position-x={ 1.1 }
            position-y={ 2 }
            rotation-y={ 0.3 }
          />
          <PhotoBoxTwo />
        </Float>
      </group>
      <group
        position-x={ 0.5 }
        rotation-y={ -0.3 }
      >
        <Float floatIntensity={ 0.6 }>
          <SectionTitle
            size={ 0.4 }
            position-y={ 2 }
            position-z={ -1 }
            bevelEnabled
            bevelThickness={ 0.3 }
            color="yellow"
          >
            { config.essentials.title }
          </SectionTitle>
        </Float>
        <CoffeeMachine
          scale={ 1 }
          position-x={ 0.8 }
          position-y={ 1.05 }
          position-z={ -0.8 }
        />
        <CoffeeGrinder
          scale={ 0.03 }
          position-x={ 1.55 }
          position-y={ 1.36 }
          position-z={ -0.8 }
        />
        <RoundedBox
          scale-x={ 1.8 }
          position-x={ 1 }
          position-y={ 0.5 }
          position-z={ -1 }
        >
          <meshStandardMaterial color="white" />
        </RoundedBox>
        <Float floatIntensity={ 0.3 }>


          <CoreDrinks
            scale={ 3 }
            position-y={ 0.3 }
            position-x={ 1 }
            rotation-x={ 0.6 }
          />
        </Float>
      </group>
    </>
  )
}