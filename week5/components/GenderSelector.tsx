import React from "react";
import { View, Text, Pressable } from "react-native";

interface GenderSelectorProps {
  value: string | null;
  onChange: (value: string) => void;
  error?: string;
  touched: boolean;
}

const options = ["ชาย", "หญิง", "ไม่ระบุ"];

export default function GenderSelector({
  value,
  onChange,
  error,
  touched,
}: GenderSelectorProps) {
  const hasError = touched && error;

  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-semibold mb-2 text-base">
        เพศ
      </Text>

      <View className="flex-row space-x-4">
        {options.map((option) => {
          const selected = value === option;

          return (
            <Pressable
              key={option}
              onPress={() => onChange(option)}
              className="flex-row items-center"
            >
              <View
                className={`
                  w-5 h-5 rounded-full border-2 mr-2 items-center justify-center
                  ${selected ? "border-blue-600" : "border-gray-400"}
                `}
              >
                {selected && (
                  <View className="w-3 h-3 rounded-full bg-blue-600" />
                )}
              </View>
              <Text className="text-gray-800 text-sm">{option}</Text>
            </Pressable>
          );
        })}
      </View>

      {hasError && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
