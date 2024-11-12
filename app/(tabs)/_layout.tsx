// app/_layout.tsx
import { Tabs } from "expo-router";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";

export default function Layout() {
  useEffect(() => {
    // Bildirim Handler'ını ayarla
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  }, []);

  return (
    // <ThemedView>
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Anasayfa" }} />
      <Tabs.Screen name="topics" options={{ title: "Konular" }} />
      <Tabs.Screen name="settings" options={{ title: "Ayarlar" }} />
    </Tabs>
    // </ThemedView>
  );
}
