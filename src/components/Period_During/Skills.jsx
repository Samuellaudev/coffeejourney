import { MeshDistortMaterial } from '@react-three/drei';
import { SectionTitle } from '../SectionTitle';
import { BookCase } from "./BookCase";
import { CouchSmall } from "./CouchSmall";
import { Lamp } from "./Lamp";

export const Skills = () => {
  return (
    <>
      <group position-x={ -2 }>
        <SectionTitle position-z={ 1.5 } rotation-y={ Math.PI / 6 }>
          SKILLS
        </SectionTitle>
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
      <mesh position-y={ 2 } position-z={ -4 } position-x={ 2 }>
        <sphereGeometry args={ [1, 64, 64] } />
        <MeshDistortMaterial
          opacity={ 0.8 }
          transparent
          distort={ 1 }
          speed={ 5 }
          color="yellow"
        />
      </mesh>
    </>
  )
}