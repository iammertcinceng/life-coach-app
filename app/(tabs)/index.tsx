// app/index.tsx
import { useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import useNotifications from "../../hooks/useNotifications";
import suggestionsData from "../../data/suggestions";
import NotificationSetup from "@/components/NotificationSetup";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const { scheduleNotification } = useNotifications();

  useEffect(() => {
    // Uygulama açıldığında günlük bildirim planla
    scheduleDailySuggestionNotification();
  }, []);

  const scheduleDailySuggestionNotification = () => {
    const suggestion = getRandomSuggestion();
    scheduleNotification(
      {
        title: "Günün Önerisi",
        body: suggestion.suggestions.toString(),
      },
      { hour: 5, minute: 0, repeats: true }
    );
  };

  const getRandomSuggestion = () => {
    // Tüm önerileri tek bir dizide topla
    const allSuggestions = Object.values(suggestionsData).flat();
    const randomIndex = Math.floor(Math.random() * allSuggestions.length);
    return allSuggestions[randomIndex];
  };

  return (
      <SafeAreaView style={styles.container}>
        {/* <ThemedText></ThemedText> */}
        <Text style={styles.title}>Yaşam Koçu Uygulamasına Hoş Geldiniz!</Text>
        <Link href="/topics/health" style={styles.link}>
          Sağlık
        </Link>
        <Link href="/topics/motivation" style={styles.link}>
          Motivasyon
        </Link>
        <Link href="/topics/nutrition" style={styles.link}>
          Beslenme
        </Link>
        <Link href="/topics/sports" style={styles.link}>
          Spor
        </Link>
        <Link href="/topics/personal_development" style={styles.link}>
          Kişisel Gelişim
        </Link>
        <NotificationSetup />
        <Button
          title="Günlük Öneriyi Planla"
          onPress={scheduleDailySuggestionNotification}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, // Başlığın yukarıda görünmesi için
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000", // Siyah başlık
    textAlign: "center",
    marginBottom: 30,
  },
  link: {
    fontSize: 25,
    color: "orange", // Turuncu renk
    marginVertical: 10,
    textDecorationLine: "underline",
  },
});
