import { RoundedBox, Text } from '@react-three/drei';

export const CustomText = ({
  children,
  fontSize,
  textMaxWidth,
  textColor = 'black',
  boxColor = 'white',
  boxShape,
  boxSmoothness,
  ...props
}) => {
  return (
    <group { ...props } >
      <Text
        textAlign="center"
        fontSize={ fontSize }
        position={ [0, 0, 0.1] }
        maxWidth={ textMaxWidth }
        font={ "fonts/Inter_Bold.json" }
        characters={ children }
      >
        { children }
        <meshStandardMaterial color={ textColor } />
      </Text>
      <RoundedBox args={ boxShape } smoothness={ boxSmoothness }>
        <meshStandardMaterial color={ boxColor } />
      </RoundedBox>
    </group>
  )
}