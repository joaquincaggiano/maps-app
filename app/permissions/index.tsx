import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { usePermissionsStore } from "@/store/usePermissions";
import ThemedPressable from "@/components/ThemedPressable";

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View className="flex-1 items-center justify-center">
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  );
};

export default PermissionsScreen;
