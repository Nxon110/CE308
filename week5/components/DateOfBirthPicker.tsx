import React, { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface DateOfBirthPickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  touched: boolean;
  error?: string;
}

export default function DateOfBirthPicker({
  value,
  onChange,
  touched,
  error,
}: DateOfBirthPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const hasError = touched && error;

  const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const handleChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowPicker(false);

    if (event.type === "set" && selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-semibold mb-2 text-base">
        วันเกิด
      </Text>

      <Pressable
        onPress={() => setShowPicker(true)}
        className={`
          w-full px-4 py-3 rounded-lg border-2 bg-white
          ${hasError ? "border-red-500" : "border-gray-300"}
        `}
      >
        <Text className={value ? "text-gray-800" : "text-gray-400"}>
          {value ? formatDate(value) : "เลือกวันเกิด (DD/MM/YYYY)"}
        </Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={value ?? new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
          maximumDate={new Date()}
        />
      )}

      {hasError && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
