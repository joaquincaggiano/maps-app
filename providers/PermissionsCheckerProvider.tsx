import { PermissionStatus } from "@/interfaces/location";
import { usePermissionsStore } from "@/store/usePermissions";
import { router } from "expo-router";
import { PropsWithChildren, useEffect } from "react";

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

  return <>{children}</>;
};

export default PermissionsCheckerProvider;
