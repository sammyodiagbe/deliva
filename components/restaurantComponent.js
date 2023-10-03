import { View, Text, Image, StyleSheet } from "react-native";

const RestaurantComponent = ({ restaurant }) => {
  const { name, type, meals } = restaurant;
  const meal = meals[0];
  const { name: mealName, image, price } = meal;
  return (
    <View style={styles.container}>
      {/* image and restaurant ratings */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{mealName}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.restaurantName}>{name}</Text>
      </View>
      {/* then we have the restaurant name and price */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginBottom: 30,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 280,
    borderRadius: 20,
  },
  textContainer: {},
  name: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#06d6a0",
    marginBottom: 5,
  },
  restaurantName: {
    fontSize: 16,
  },
});

export default RestaurantComponent;
