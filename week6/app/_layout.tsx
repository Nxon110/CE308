import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
        name="details"
        options={{
          title: 'Product Details',
          headerStyle: {
            backgroundColor: '#FF69B4',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack>
  );
}