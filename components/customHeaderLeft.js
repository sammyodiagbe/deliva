import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderLeft = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={28} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});

export default CustomHeaderLeft;
