import { config } from "../../config";
import * as THREE from "three";

import { Center, Float } from "@react-three/drei";
import { SectionTitle } from '../SectionTitle';
import { MacBookPro } from "./MacBookPro";
import { PalmTree } from "./PalmTree";
import { Star } from "./Star";

export const Home = () => {
  return (
    <>
      <Star position-z={ 0 } position-y={ 2.2 } scale={ 0.3 } />
      <Float floatIntensity={ 2 } speed={ 2 }>
        <MacBookPro
          position-x={ -1 }
          position-y={ 0.5 }
          position-z={ 0 }
          scale={ 0.3 }
          rotation-y={ Math.PI / 4 }
        />
      </Float>
      <PalmTree
        scale={ 0.018 }
        rotation-y={ THREE.MathUtils.degToRad(140) }
        position={ [4, 0, -5] }
      />
      <Float floatIntensity={ 0.6 }>
        <Center disableY disableZ>
          <SectionTitle
            size={ 0.8 }
            position-y={ 1.6 }
            position-z={ -3 }
            bevelEnabled
            bevelThickness={ 0.3 }
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
    </>
  )
}