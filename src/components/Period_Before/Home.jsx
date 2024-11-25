import { config } from "../../config";

import { Center, Float, RoundedBox } from "@react-three/drei";
import { SectionTitle } from '../SectionTitle';
import { MacBookPro } from "./MacBookPro";
import { MonitorScreen } from "./MonitorScreen";
import { Monitor } from "./Monitor";
import { Star } from "./Star";

export const Home = () => {
  return (
    <>
      <Star position-z={ 0 } position-y={ 2.2 } scale={ 0.3 } />
      <Float floatIntensity={ 0.6 }>
        <Center disableY disableZ>
          <SectionTitle
            size={ 0.6 }
            position-x={ 1 }
            position-y={ 1.6 }
            position-z={ -3 }
            rotation-y={0.3}
            bevelEnabled
            bevelThickness={ 0.3 }
            color="#AFE1AF"
          >
            { config.home.title }
          </SectionTitle>
        </Center>
      </Float>
      <Center disableY disableZ>
        <SectionTitle
          size={ 0.8 }
          position-x={ -1 }
          position-z={ -3 }
          bevelEnabled
          bevelThickness={ 0.3 }
          rotation-y={ Math.PI / 10 }
        >
          { config.home.subtitle }
        </SectionTitle>
      </Center>
      <Float floatIntensity={ 2 } speed={ 2 }>
        <MacBookPro
          position-x={ -1.3 }
          position-y={ 0.5 }
          position-z={ 0 }
          scale={ 0.3 }
          rotation-y={ Math.PI / 4 }
        />
      </Float>
      <group
        position-x={ 1.5 }
        position-z={ 0 }
        rotation-y={ -Math.PI / 6 }
        scale={ 0.8 }
      >
        <Monitor
          scale={ 0.02 }
          position-y={ 1 }
          rotation-y={ -Math.PI / 2 }
          position-z={ -1 }
        />
        <MonitorScreen
          rotation-x={ -0.18 }
          position-z={ -0.895 }
          position-y={ 1.74 }
        />
        <RoundedBox scale-x={ 1.5 } position-y={ 0.5 } position-z={ -1 }>
          <meshStandardMaterial color="white" />
        </RoundedBox>
      </group>
    </>
  )
}