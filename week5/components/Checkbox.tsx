import React from "react";
import { View, Text, Pressable } from "react-native";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  error?: string;
  touched: boolean;
}

export default function Checkbox({
  label,
  checked,
  onPress,
  error,
  touched,
}: CheckboxProps) {
  const hasError = touched && error;

  return (
    <View className="mb-4">
      <Pressable onPress={onPress} className="flex-row items-center">
        <View
          className={`
            w-5 h-5 mr-3 rounded border-2 items-center justify-center
            ${checked ? "bg-blue-600 border-blue-600" : "border-gray-400"}
          `}
        >
          {checked && <Text className="text-white text-xs">✓</Text>}
        </View>

        <Text className="text-gray-800 text-sm">{label}</Text>
      </Pressable>

      {hasError && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
