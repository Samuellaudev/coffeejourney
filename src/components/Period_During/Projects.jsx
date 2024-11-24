import { RoundedBox } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { MonitorScreen } from "./MonitorScreen";
import { Monitor } from "./Monitor";

export const Projects = () => {
  return (
    <>
      <group position-x={ 1 }>
        <SectionTitle
          position-x={ -0.5 }
          position-z={ 0 }
          rotation-y={ -Math.PI / 6 }
        >
          PROJECTS
        </SectionTitle>
        <group
          position-x={ 0.5 }
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
          <RoundedBox scale-x={ 2 } position-y={ 0.5 } position-z={ -1 }>
            <meshStandardMaterial color="white" />
          </RoundedBox>
        </group>
      </group>
    </>
  )
}