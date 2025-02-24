import { PropsWithChildren, useEffect } from "react";
import { AppState } from "react-native";
import { PermissionStatus } from "@/interfaces/location";
import { usePermissionsStore } from "@/store/usePermissions";
import { router } from "expo-router";

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace("/map");
    }

    if (locationStatus === PermissionStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        checkLocationPermission();
      }
    });

    return () => subscription.remove();
  }, []);

  return <>{children}</>;
};

export default PermissionsCheckerProvider;
