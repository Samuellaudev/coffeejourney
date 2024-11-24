import { Float } from "@react-three/drei";
import { SectionTitle } from "../SectionTitle";
import { Balloon } from "./Balloon";
import { Mailbox } from "./Mailbox";
import { ParkBench } from "./ParkBench";
import { Pigeon } from "./Pigeon";

export const Contact = () => {
  return (
    <>
      <SectionTitle position-x={ -2 } position-z={ 0.6 }>
        CONTACT
      </SectionTitle>
      <group position-x={ -2 }>
        <ParkBench
          scale={ 0.5 }
          position-x={ -0.5 }
          position-z={ -2.5 }
          rotation-y={ -Math.PI / 4 }
        />
        <group position-y={ 2.2 } position-z={ -0.5 }>
          <Float floatIntensity={ 2 } rotationIntensity={ 1.5 }>
            <Balloon scale={ 1.5 } position-x={ -0.5 } color="#71a2d9" />
          </Float>
          <Float
            floatIntensity={ 1.5 }
            rotationIntensity={ 2 }
            position-z={ 0.5 }
          >
            <Balloon scale={ 1.3 } color="#d97183" />
          </Float>
          <Float speed={ 2 } rotationIntensity={ 2 }>
            <Balloon scale={ 1.6 } position-x={ 0.4 } color="yellow" />
          </Float>
        </group>
      </group>

      <Mailbox
        scale={ 0.25 }
        rotation-y={ 1.25 * Math.PI }
        position-x={ 1 }
        position-y={ 0.25 }
        position-z={ 0.5 }
      />
      <Float floatIntensity={ 1.5 } speed={ 3 }>
        <Pigeon
          position-x={ 2 }
          position-y={ 1.5 }
          position-z={ -0.5 }
          scale={ 0.3 }
        />
      </Float>
    </>
  )
}
