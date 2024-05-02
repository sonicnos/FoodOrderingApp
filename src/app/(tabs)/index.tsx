import { FlatList, ScrollView, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@/components/ProductListItem";

const product = products[0];
export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
    />
  );
}

{
  /* <ScrollView>
        {products.map((product) => {
          return <ProductListItem product={product} />;
        })}
      </ScrollView> */
}
