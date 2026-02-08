import "./global.css";
import { View, Text, FlatList } from "react-native";
import { useState } from "react";

import { ItemCard } from "@/components/ItemCard";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";

/* ---------------- Types ---------------- */

type Item = {
  id: string;
  productName: string;
  price: number;
  pcs: number;
  btnSize: "small" | "medium" | "large";
  btnColor: "primary" | "secondary" | "danger";
};

type FormState = {
  productName: string;
  price: string;
  pcs: string;
};

export default function Index() {
  /* ---------------- Workshop 4.1 ---------------- */

  const items: Item[] = [
    {
      id: "1",
      productName: "Banana",
      price: 2000,
      pcs: 10,
      btnSize: "small",
      btnColor: "primary",
    },
    {
      id: "2",
      productName: "Mango",
      price: 2000,
      pcs: 10,
      btnSize: "medium",
      btnColor: "secondary",
    },
    {
      id: "3",
      productName: "Apple",
      price: 2000,
      pcs: 10,
      btnSize: "large",
      btnColor: "danger",
    },
  ];

  const sizeMap = {
    small: "sm",
    medium: "md",
    large: "lg",
  } as const;

  const colorMap = {
    primary: "primary",
    secondary: "secondary",
    danger: "danger",
  } as const;

  const renderItem = ({ item }: { item: Item }) => (
    <ItemCard
      name={item.productName}
      price={item.price}
      pcs={item.pcs}
      btnSize={sizeMap[item.btnSize]}
      btnColor={colorMap[item.btnColor]}
      onBuy={() => console.log("ซื้อ", item.productName)}
    />
  );

  /* ---------------- Workshop 4.2 ---------------- */

  const [form, setForm] = useState<FormState>({
    productName: "",
    price: "",
    pcs: "",
  });

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16, backgroundColor: "white" }}
      ListFooterComponent={
        <View className="mt-6">
          <Text className="text-lg font-bold mb-4">กรอกข้อมูลสินค้า</Text>

          <CustomInput
            label="ชื่อสินค้า"
            value={form.productName}
            onChangeText={(text) => handleChange("productName", text)}
            placeholder="กรุณากรอกชื่อสินค้า"
          />

          <CustomInput
            label="ราคา"
            value={form.price}
            onChangeText={(text) => handleChange("price", text)}
            placeholder="กรุณากรอกราคา"
          />

          <CustomInput
            label="จำนวน"
            value={form.pcs}
            onChangeText={(text) => handleChange("pcs", text)}
            placeholder="กรุณากรอกจำนวน"
          />

          <CustomButton
            title="ยืนยัน"
            size="md"
            variant="primary"
            onPress={handleSubmit}
          />
        </View>
      }
    />
  );
}
