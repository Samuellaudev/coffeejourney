import { Text3D } from "@react-three/drei";

export const SectionTitle = ({ children, color = 'white', ...props }) => {
  return (
    <Text3D
      font={ "fonts/Inter_Bold.json" }
      size={ 0.3 }
      bevelEnabled
      bevelThickness={ 0.01 }
      bevelSize={ 0.02 }
      { ...props }
    >
      { children }
      <meshStandardMaterial color={ color } />
    </Text3D>
  );
};