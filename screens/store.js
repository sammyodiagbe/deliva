import { StyleSheet, View, Text, Button} from "react-native";

const Store = () => {
    return <View style={styles.container}>
        <Text>Welcome to the second screen</Text>
        <Button title="Go to screen 1" onPress={() => navigation.navigate("HOme")} />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Store;