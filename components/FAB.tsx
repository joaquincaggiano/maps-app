import {
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon: keyof typeof Ionicons.glyphMap;
}

const FAB = ({ onPress, style, icon }: Props) => {
  return (
    <Pressable
      style={[styles.btn, style]}
      onPress={onPress}
      className="active:opacity-50"
    >
      <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    zIndex: 99,
    position: "absolute",
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowColor: "black",
    shadowOffset: { width: 4.5, height: 0.27 },
    elevation: 5,
  },
});

export default FAB;
