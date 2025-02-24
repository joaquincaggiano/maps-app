import { Pressable, PressableProps } from 'react-native'
import { ThemedText } from './ThemedText'

interface Props extends PressableProps {
    children: string
}

const ThemedPressable = ({ children, ...props }: Props) => {
  return (
    <Pressable {...props} className="bg-black px-5 py-2 rounded-md m-2">
        <ThemedText className="text-white">{children}</ThemedText>
    </Pressable>
  )
}

export default ThemedPressable