import * as Location from "expo-location";
import { PermissionStatus } from "@/interfaces/location";
import { Alert, Linking } from "react-native";

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== PermissionStatus.GRANTED) {
      if (status === PermissionStatus.DENIED) {
        manualPermissionRequest();
      }
      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
  };

export const checkLocationPermission = async () => {
  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case PermissionStatus.GRANTED:
      return PermissionStatus.GRANTED;
    case PermissionStatus.DENIED:
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDETERMINED;
  }
};

const manualPermissionRequest = async () => {
  Alert.alert(
    "Permiso de ubicación",
    "Por favor, habilite el permiso de ubicación para continuar",
    [
      {
        text: "Abrir ajustes",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancelar",
        style: "destructive",
      },
    ]
  );
};
