import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    children: string
}

const ThemedPressable = ({ children, ...props }: Props) => {
  return (
    <Pressable {...props} className="bg-black px-5 py-2 rounded-md m-2">
        <Text className="text-white">{children}</Text>
    </Pressable>
  )
}

export default ThemedPressable