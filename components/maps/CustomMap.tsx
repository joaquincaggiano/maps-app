import { LatLng } from "@/interfaces/lat-lng";
import { useLocationStore } from "@/store/useLocationStore";
import { useEffect, useRef, useState } from "react";
import { View, ViewProps } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
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
  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [isPolylineVisible, setIsPolylineVisible] = useState(false);

  const {
    watchLocation,
    clearWatchLocation,
    lastKnownLocation,
    getLocation,
    userLocationList,
  } = useLocationStore();

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  const moveCameraToLocation = (latLng: LatLng) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: latLng,
    });
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) {
      moveCameraToLocation(initialLocation);
    } else {
      moveCameraToLocation(lastKnownLocation);
    }

    const location = await getLocation();

    if (!location) return;

    moveCameraToLocation(location);
  };

  return (
    <View {...props}>
      <MapView
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        // showsPointsOfInterest={false}
        onTouchStart={() => setIsFollowingUser(false)}
        showsUserLocation={showUserLocation}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {isPolylineVisible && (
          <Polyline
            coordinates={userLocationList}
            strokeColor="#000"
            strokeWidth={4}
          />
        )}
      </MapView>

      <FAB
        onPress={() => setIsPolylineVisible(!isPolylineVisible)}
        style={{ bottom: 140, right: 20 }}
        icon={isPolylineVisible ? "eye-outline" : "eye-off-outline"}
      />

      <FAB
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{ bottom: 80, right: 20 }}
        icon={isFollowingUser ? "walk-outline" : "accessibility-outline"}
      />

      <FAB
        onPress={moveToCurrentLocation}
        style={{ bottom: 20, right: 20 }}
        icon="location-outline"
      />
    </View>
  );
};

export default CustomMap;
