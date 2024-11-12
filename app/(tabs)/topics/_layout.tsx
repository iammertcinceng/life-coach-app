// app/(tabs)/topics/_layout.tsx
import { Stack } from "expo-router";

export default function TopicsLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="[topic]" options={{ title: "Konu Detayı" }} />
    </Stack>
  );
}
