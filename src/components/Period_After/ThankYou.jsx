import { Float } from "@react-three/drei";
import { SectionTitle } from "../SectionTitle";
import { Balloon } from "./Balloon";
import { PhotoBoxSix } from "./PhotoBoxSix";
import { PhotoBoxSeven } from "./PhotoBoxSeven";
import { PhotoBoxNine } from "./PhotoBoxNine";
import { PhotoBoxTen } from "./PhotoBoxTen";
import { ThumbsUp } from "./ThumbsUp";

export const ThankYou = () => {
  return (
    <>
      {/* Left group */ }
      <group>
        <group
          position-x={ -2.3 }
          position-y={ 2.2 }
          position-z={ -0.5 }
        >
          <Float floatIntensity={ 2 } rotationIntensity={ 1.5 }>
            <Balloon scale={ 1.5 } position-x={ -0.5 } position-y={ 0.4 } color="#71a2d9" />
          </Float>
          <Float
            floatIntensity={ 1.5 }
            rotationIntensity={ 2 }
            position-z={ 0.5 }
          >
            <Balloon scale={ 1.3 } color="#d97183" />
          </Float>
          <Float speed={ 2 } rotationIntensity={ 2 }>
            <Balloon scale={ 1.6 } position-x={ 0.2 } position-y={ 0.4 } color="yellow" />
          </Float>
        </group>
        <SectionTitle
          scale={ 1.3 }
          position-x={ -2.9 }
          position-y={ 0.2 }
          position-z={ 1 }
          rotation-y={ 0.5 }
          color="#FFBF00"
        >
          Thank You
        </SectionTitle>
        <Float floatIntensity={ 2 } >
          <PhotoBoxSix />
          <PhotoBoxSeven />
        </Float>
      </group>
      {/* Right group */ }
      <group
        position-x={ 1 }
      >
        <Float floatIntensity={ 0.3 } rotationIntensity={ 1.5 }>
          <ThumbsUp
            scale={ 0.2 }
            position-x={ 1.4 }
            position-y={ 0.6 }
            position-z={ 1 }
            rotation-y={ 0.5 }
          />
        </Float>
        <Float
          floatIntensity={ 0.8 }
          rotationIntensity={ 1.3 }
          position-y={ 0.5 }
        >
          <PhotoBoxTen /> {/* WellGrounded */ }
          <PhotoBoxNine /> {/* Wogan */ }
        </Float>
      </group>
    </>
  )
}
