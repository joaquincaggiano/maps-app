import { LatLng } from "@/interfaces/lat-lng";
import { useLocationStore } from "@/store/useLocationStore";
import { useEffect, useRef } from "react";
import { View, ViewProps } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import FAB from "../FAB";

interface Props extends ViewProps {
  showUserLocation?: boolean;
  initialLocation: LatLng;
}

const CustomMap = ({
  showUserLocation = true,
  initialLocation,
  ...props
}: Props) => {
  const mapRef = useRef<MapView>(null);
  const { watchLocation, clearWatchLocation, lastKnownLocation } =
    useLocationStore();

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (!lastKnownLocation) return;

    moveCameraToLocation(lastKnownLocation);
  }, [lastKnownLocation]);

  const moveCameraToLocation = (latLng: LatLng) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: latLng,
    });
  };

  return (
    <View {...props}>
      <MapView
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        // showsPointsOfInterest={false}
        showsUserLocation={showUserLocation}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <FAB onPress={() => {}} style={{ bottom: 20, right: 20 }} icon="location-outline" />
    </View>
  );
};

export default CustomMap;
