import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const CustomHeaderRight = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="notifications-sharp" size={28} />
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

export default CustomHeaderRight;
