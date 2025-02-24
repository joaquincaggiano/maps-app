import * as Location from "expo-location";
import { PermissionStatus } from "@/interfaces/location";

export const requestLocationPermission = async (): Promise<PermissionStatus> => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== PermissionStatus.GRANTED) {
    manualPermissionRequest()
    return PermissionStatus.DENIED;
  }

  return PermissionStatus.GRANTED
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

}