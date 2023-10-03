import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Pressable,
  Text,
  FlatList,
} from "react-native";
import CustomHeaderLeft from "../components/customHeaderLeft";
import CustomHeaderTitle from "../components/headerTitle";
import CustomHeaderRight from "../components/customHeaderRight";
import ListItem from "../components/listItem";
import items from "../constants/lists";
import RestaurantComponent from "../components/restaurantComponent";
import restaurants from "../constants/mealsAndRestaurants";

const Home = ({ navigation }) => {
  const renderLists = ({ item }) => {
    return <ListItem image={item.image} name={item.name} />;
  };

  const renderRestaurants = ({ item }) => {
    return <RestaurantComponent restaurant={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomHeaderLeft />
        <CustomHeaderTitle />
        <CustomHeaderRight />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.banner}>
          <Image
            source={require("../assets/images/food_image.png")}
            style={styles.foodImage}
          />

          <Text style={styles.introText}>
            Claim your daily free delivery now!
          </Text>
          <Pressable onPress={null}>
            <View style={styles.pressable}>
              <Text style={styles.pressableText}>Order now</Text>
            </View>
          </Pressable>
        </View>
        <FlatList
          data={items}
          renderItem={renderLists}
          keyExtractor={(item) => item.id}
          numColumns={4}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
        <View style={styles.horizontalScrollContainer}>
          <Text style={styles.featuredTitle}>Featured</Text>
          <FlatList
            data={restaurants}
            renderItem={renderRestaurants}
            keyExtractor={(restaurant) => restaurant.id}
            style={styles.featured}
            horizontal={true}
          ></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalScrollContainer: {},
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  banner: {
    flex: 1,
    backgroundColor: "#06d6a0",
    borderRadius: 10,
    padding: 20,
    overflow: "hidden",
    paddingVertical: 25,
    marginBottom: 30,
  },

  foodImage: {
    height: 220,
    width: 220,
    position: "absolute",
    right: -20,
    bottom: 40,
    top: -20,
  },
  introText: {
    fontSize: 24,
    width: "60%",
    fontWeight: "600",
    marginBottom: 18,
    color: "white",
  },
  pressable: {
    flex: 1,
    backgroundColor: "#000814",
    padding: 10,
    borderRadius: 50,
    width: 120,
    justifyContent: "center",
    alignContent: "center",
  },
  pressableText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  featured: {
    flex: 1,
    minHeight: 150,
    background: "orange",
  },
  box: {
    width: 200,
    height: 200,
    marginRight: 20,
    backgroundColor: "yellow",
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 25,
  },
});

export default Home;
