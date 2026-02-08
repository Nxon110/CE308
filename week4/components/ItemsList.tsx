import { View, FlatList } from "react-native";
import { CustomButton } from "./CustomButton";

type Item = {
  id: string;
  productName: string;
  price: number;
  pcs: number;
  btnSize: "small" | "medium" | "large";
  btnColor: "primary" | "secondary" | "danger";
};

type ItemListProps = {
  items: Item[];
};

const sizeMap = {
  small: "sm",
  medium: "md",
  large: "lg",
} as const;

export const ItemList = ({ items }: ItemListProps) => {
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View className="border-b border-gray-400 p-4">
        <CustomButton
          title="ซื้อเลย"
          size={sizeMap[item.btnSize]}
          variant={item.btnColor}
          onPress={() => console.log("ซื้อ", item.productName)}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};
