import Loading from "@/components/Loading";
import CustomMap from "@/components/maps/CustomMap";
import { useLocationStore } from "@/store/useLocationStore";
import { useEffect } from "react";
import { View } from "react-native";

const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (!lastKnownLocation) {
    return <Loading />;
  }

  return (
    <View>
      <CustomMap
        initialLocation={lastKnownLocation}
      />
    </View>
  );
};

export default MapScreen;
