import { useMobile } from "../../hooks/useMobile";
import { Float } from "@react-three/drei";
import { SectionTitle } from "../SectionTitle";
import { Balloon } from "./Balloon";
import { ParkBench } from "./ParkBench";
import { Mailbox } from "./Mailbox";
import { Pigeon } from "./Pigeon";

export const Contact = () => {
  const { isMobile, scaleFactor } = useMobile()

  return (
    <>
      <SectionTitle
        color="#f69050"
        position-x={ isMobile ? -1.1 : -2 * scaleFactor }
        position-y={ 0.1 }
        position-z={ isMobile ? 1.3 : 1 }
      >
        CONTACT
      </SectionTitle>

      {/* Left Group */ }
      <group position-x={ -2 * scaleFactor }>
        <ParkBench
          scale={ 0.5 }
          position-x={ -0.5 }
          position-z={ -2.5 }
          rotation-y={ -Math.PI / 4 }
        />
        <group position={ [-0.5, 2, -0.5] }>
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

      {/* Right Group */ }
      <group position={ [0, 0, 0] }>
        <Mailbox
          scale={ 0.25 }
          rotation-y={ 1.25 * Math.PI }
          position-x={ 1 }
          position-y={ 0.25 }
          position-z={ 0.5 }
        />

        <Float floatIntensity={ 1.5 } speed={ 3 }>
          <Pigeon
            position-x={ isMobile ? 0.4 : 2 * scaleFactor }
            position-y={ isMobile ? 1.9 : 1.5 }
            position-z={ -0.5 }
            scale={ 0.3 }
          />
        </Float>
      </group>
    </>
  );
};
