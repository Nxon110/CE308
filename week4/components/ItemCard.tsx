import { View, Text } from "react-native";
import { CustomButton } from "./CustomButton";

type ItemCardProps = {
  name: string;
  price: number;
  pcs: number;
  btnSize: "sm" | "md" | "lg";
  btnColor: "primary" | "secondary" | "danger";
  onBuy: () => void;
};

export const ItemCard = (props: ItemCardProps) => {
  const {
    name,
    price,
    pcs,
    btnSize,
    btnColor,
    onBuy,
  } = props;

  return (
    <View className="w-full mb-4 rounded-xl bg-gray-200 p-4">
      <Text className="mb-2 text-lg font-bold">
        ชื่อสินค้า: {name}
      </Text>

      <Text className="text-base">ราคา: {price}</Text>
      <Text className="mb-3 text-base">จำนวน: {pcs}</Text>

      <CustomButton
        title="สั่งซื้อ"
        onPress={onBuy}
        size={btnSize}
        variant={btnColor}
      />
    </View>
  );
};

