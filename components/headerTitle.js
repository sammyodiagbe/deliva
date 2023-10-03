import { View, StyleSheet, Text, StatusBar } from "react-native";
import { headerTitleColor } from "../constants/colors"
import Ionicons from "@expo/vector-icons/Ionicons"

const CustomHeaderTitle = () => {
    return <View style={styles.container}>
        <Text style={styles.headerText}>Current Location</Text>
        <View style={styles.iconAndTextContainer}>
            <Ionicons name="md-location" size={24} color="green" />
        <Text style={styles.subText}>Surakarta, ind</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'green'
        height: StatusBar.currentHeight,
        paddingVertical: 10
    },
    headerText: {
        color: headerTitleColor,
        textAlign: "center",
        marginBottom: 2,
    },
    iconAndTextContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    locationIcon: {
        height: 25,
        width: 25,
    }
})

export default CustomHeaderTitle;