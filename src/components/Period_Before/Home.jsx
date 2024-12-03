import { useMemo } from 'react';
import { config } from "../../config";
import { Center, Float, RoundedBox } from "@react-three/drei";
import { SectionTitle } from '../SectionTitle';
import { MacBookPro } from "./MacBookPro";
import { MonitorScreen } from "./MonitorScreen";
import { Monitor } from "./Monitor";
import { Star } from "./Star";
import { ExpandableText } from '../ExpandableText';

export const Home = () => {
  const titlePosition = useMemo(() => ({ x: 1, y: 1.6, z: -3 }), []);
  const macBookPosition = useMemo(() => ({ x: -1.3, y: 0.5, z: 0 }), []);
  const monitorPosition = useMemo(() => ({ x: 1.5, y: 0.1, z: 0 }), []);
  const monitorRotation = useMemo(() => ({ y: -Math.PI / 6 }), []);

  return (
    <>
      {/* Star component */ }
      <Star position={ [0, 2.2, 0] } scale={ 0.3 } />

      <group>
        <Float floatIntensity={ 0.6 }>
          <Center disableY disableZ>
            <SectionTitle
              size={ 0.6 }
              position={ [titlePosition.x, titlePosition.y, titlePosition.z] }
              rotation={ [0, 0.3, 0] }
              bevelEnabled
              bevelThickness={ 0.3 }
              color="#AFE1AF"
            >
              { config.home.title }
            </SectionTitle>
          </Center>
        </Float>

        <ExpandableText
          content="Hi! I’m Samuel Lau. Nice to meet you! Back in 2023, I was a web developer in Hong Kong, creating dynamic, user-friendly websites. I believe great developers are curious, detail-oriented, and love solving problems—just like me. (Keep scrolling to follow my journey! :D)"
          typingSpeed={ 20 }
          maxLength={ 37 }
          textSize={ 0.09 }
          initialPosition={ [0.1, 1, 0] }
          smallTextPosition={ [0.1, 0.9, 0] }
          planeInitialSize={ [3.5, 0.6] }
          planeExpandedSize={ [2, 0.5] }
          groupPosition={ [1.5, -0.4, 0] }
          expandedTextLength={ 2 }
        />

        <Float floatIntensity={ 2 } speed={ 2 }>
          <MacBookPro
            position={ [macBookPosition.x, macBookPosition.y, macBookPosition.z] }
            scale={ 0.3 }
            rotation={ [0, Math.PI / 4, 0] }
          />
        </Float>
      </group>

      {/* Monitor Group */ }
      <group position={ [monitorPosition.x, monitorPosition.y, monitorPosition.z] } rotation={ [0, monitorRotation.y, 0] } scale={ 0.8 }>
        <Monitor
          scale={ 0.02 }
          position={ [0, 1, -1] }
          rotation={ [0, -Math.PI / 2, 0] }
        />
        <MonitorScreen
          rotation={ [-0.18, 0, 0] }
          position={ [0, 1.74, -0.895] }
        />
        <RoundedBox scale-x={ 1.5 } position={ [0, 0.5, -1] }>
          <meshStandardMaterial color="white" />
        </RoundedBox>
      </group>
    </>
  );
};
