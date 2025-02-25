import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
const MapScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <MapView
        style={{ width: "100%", height: "100%" }}
        // showsPointsOfInterest={false}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Aquí estoy"
          description="Esta es mi ubicación actual"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
