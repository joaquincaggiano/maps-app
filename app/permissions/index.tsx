import { ThemedText } from '@/components/ThemedText'
import { View } from 'react-native'
import { usePermissionsStore } from "@/store/usePermissions";

 const PermissionsScreen = () => {
  const { locationStatus } = usePermissionsStore();

  return (
    <View className="flex-1 items-center justify-center">
      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  )
}

export default PermissionsScreen