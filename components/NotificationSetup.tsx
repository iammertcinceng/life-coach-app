// components/NotificationSetup.tsx
import React, { useEffect } from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import suggestionsData from '../data/suggestions'; // Doğru yoldan içe aktarın

export default function NotificationSetup() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert('Bildirim izni vermediniz!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      Alert.alert('Fiziksel bir cihazda çalıştırmanız gerekiyor.');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  };

  const getRandomSuggestion = () => {
    // Tüm önerileri tek bir dizide topla
    const allSuggestions = Object.values(suggestionsData).flatMap(topic => topic.suggestions);
    const randomIndex = Math.floor(Math.random() * allSuggestions.length);
    return allSuggestions[randomIndex];
  };

  const scheduleNotification = async () => {
    const suggestion = getRandomSuggestion(); // Rastgele bir öneri al
    await Notifications.scheduleNotificationAsync({
      content: {
        title: suggestion.title,
        body: suggestion.text,    // Rastgele seçilen öneri metni
      },
      trigger: { seconds: 5 }, // Test için 5 saniye sonra tetiklenecek
    });
    Alert.alert('Bildirim ayarlandı!');
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Button title="Bildirim yolla " onPress={scheduleNotification} />
    </View>
  );
}
