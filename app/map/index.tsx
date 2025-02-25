import CustomMap from "@/components/maps/CustomMap";
import { View } from "react-native";

const MapScreen = () => {
  return (
    <View>
      <CustomMap
        initialLocation={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
      />
    </View>
  );
};

export default MapScreen;
