import { LatLng } from "@/interfaces/lat-lng";
import { View, Text, ViewProps } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

interface Props extends ViewProps {
  showUserLocation?: boolean;
  initialLocation: LatLng;
}

const CustomMap = ({
  showUserLocation = true,
  initialLocation,
  ...props
}: Props) => {
  return (
    <View {...props}>
      <MapView
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
    </View>
  );
};

export default CustomMap;
