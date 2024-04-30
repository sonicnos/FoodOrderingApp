import { StyleSheet, Text, View, Image } from "react-native";
import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";

const product = products[0];

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "800",
  },
  image: {
    height: 100,
    width: "100%",
  },
});
