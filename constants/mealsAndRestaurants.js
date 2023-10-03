const restaurants = [
  {
    type: "African",
    name: "Sahara delights Eatery",
    meals: [
      {
        name: "Jollof Rice and Grilled Chicken",
        price: 12.99,
        image: require("../assets/images/restaurants/african1.jpg"),
      },
      {
        name: "Fried Rice with Beef",
        price: 13.4,
        image: require("../assets/images/restaurants/african2.jpg"),
      },
    ],
  },
  {
    type: "Chinese",
    name: "Bamboo Grove Fusion",
    meals: [
      {
        name: "Pad Thai Noodles with Shrimps",
        price: 14.5,
        image: require("../assets/images/restaurants/chinese1.jpg"),
      },
      {
        name: "Chicken Tikka Masala",
        price: 17.5,
        image: require("../assets/images/restaurants/chinese2.jpg"),
      },
    ],
  },
  {
    type: "American",
    name: "All American BBQ",
    meals: [
      {
        name: "Cheesburger with Fries.",
        price: 11.4,
        image: require("../assets/images/restaurants/american1.jpg"),
      },
      {
        name: "BBQ Pulled Pork Sandwich",
        price: 13.5,
        image: require("../assets/images/restaurants/american2.jpg"),
      },
    ],
  },
  {
    type: "Indian",
    name: "Curry House Kitchen",
    meals: [
      {
        name: "Butter Chicken with Naan Bread",
        price: 15.7,
        image: require("../assets/images/restaurants/indian1.jpg"),
      },
      {
        name: "Tandoori Lamb Kebab",
        price: 18.4,
        image: require("../assets/images/restaurants/indian2.jpg"),
      },
    ],
  },
];

export default restaurants;
