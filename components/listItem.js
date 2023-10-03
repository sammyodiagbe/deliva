import { View, Image, StyleSheet, Text } from "react-native";

const ListItem = ({ image, name }) => {
    console.log(name)
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        backgroundColor:'#edf2f4',
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        height: 40,
        width: 40,
        marginBottom: 10,
    },
    title: {
        fontSize: 16
    }
});
export default ListItem;
