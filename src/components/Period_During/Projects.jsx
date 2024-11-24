import { SectionTitle } from '../SectionTitle';

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
        </group>
      </group>
    </>
  )
}