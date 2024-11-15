// app/index.tsx
import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import useNotifications from "../../hooks/useNotifications";
import suggestionsData from "../../data/TRsuggestions";
import NotificationSetup from "@/components/NotificationSetup";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as Notifications from "expo-notifications";

export default function HomeScreen() {

  const [greetingMessage, setGreetingMessage] = useState<string>('');

  useEffect(() => {
    scheduleHourlyNotification();
  }, []);

  async function scheduleHourlyNotification() {
    // Önceki tüm planlanmış bildirimleri iptal eder
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Her saat başı tekrarlayan bir bildirim planlar
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Günün Önerisi",
        body: getRandomSuggestion().text, // Doğru property kullanıldı
        sound: true, // Bildirim sesi çalınacak
      },
      trigger: {
        seconds: 3600, // 1 saat = 3600 saniye
        repeats: true, // Tekrarlayan bildirim
      },
    });
  }

  const getRandomSuggestion = () => {
    // Tüm kategorilerden tüm önerileri tek bir dizide topla
    const allSuggestions = Object.values(suggestionsData)
      .map((category) => category.suggestions)
      .flat();

    const randomIndex = Math.floor(Math.random() * allSuggestions.length);
    return allSuggestions[randomIndex];
  };


  useEffect(() => {
    // Zaman dilimine göre karşılama mesajını ayarlıyoruz
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreetingMessage('Günaydın');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreetingMessage('Tünaydın');
    } else if (currentHour >= 17 && currentHour < 22) {
      setGreetingMessage('İyi Akşamlar');
    } else {
      setGreetingMessage('İyi Geceler');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ThemedText></ThemedText> */}
      <Text style={styles.title}>Yaşam Koçu Uygulamasına Hoş Geldiniz!</Text>
      <Text>{greetingMessage}</Text>
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
    color: "orange",
    textAlign: "center",
    marginBottom: 30,
  },
  link: {
    fontSize: 25,
    backgroundColor: "orange",
    color: "#000",
    padding: 5,
    marginVertical: 10,
  },
});
