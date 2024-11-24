import { Float, RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { Airplane } from './Airplane';
import { Flag } from './Flag';
import { AvatarSophie } from '../AvatarSophie';

export const FlyToUk = () => {
  return (
    <>
      <group position-x={ -2.1 }>
        <SectionTitle
          position-x={ -0.4 }
          position-z={ 1.5 }
          position-y={ 0.2 }
          rotation-y={ Math.PI / 6 }
        >
          FlightTo UK
        </SectionTitle>
        <group rotation-y={ Math.PI / 6 } >
          <Flag
            scale={ 0.6 }
            position-y={ 0.6 }
          />
          <RoundedBox
            scale-x={ 1.5 }
            scale-y={ 0.5 }
            position-y={ 0.3 }
            position-z={ -1 }
          >
            <meshStandardMaterial color="white" />
          </RoundedBox>
        </group>
      </group>
      <AvatarSophie
        position-x={ 1 }
      />
      <Float floatIntensity={ 1.5 } speed={ 3 }>
        <Airplane
          position-x={ 1.1 }
          position-y={ 2 }
          position-z={ -0.5 }
          rotation-y={ Math.PI / 6 }
          scale={ 0.03 }
        />
      </Float>
    </>
  )
}