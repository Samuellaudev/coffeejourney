import { Suspense, useEffect, useState } from "react";
import { config } from "./config";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { MotionConfig } from "framer-motion";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { LoadingScreen } from "./components/LoadingScreen";

const audio = new Audio("./audios/cheerful-mood.mp3");
audio.loop = true;
function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      audio.play();
    }
  }, [start]);

  return (
    <>
      <Canvas camera={ { position: [0, 0.5, 5], fov: 42 } }>
        <color attach="background" args={ ["#f5f3ee"] } />
        <fog attach="fog" args={ ["#f5f3ee", 10, 50] } />
        <Suspense fallback={ null }>{ start &&
          <ScrollControls
            pages={ config.sections.length }
            damping={ 0.1 }
            maxSpeed={ 0.2 }
          >
            <group position-y={ -1 }>
              <MotionConfig
                transition={ {
                  duration: 0.6,
                } }
              >
                <Experience />
              </MotionConfig>
            </group>
            <Scroll html>
              <MotionConfig transition={ { duration: 1 } }>
                <Interface />
              </MotionConfig>
            </Scroll>
          </ScrollControls>
        }</Suspense>
      </Canvas>
      {/* { start && <Menu />} */}
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  );
}

export default App;
