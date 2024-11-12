// hooks/useNotifications.ts
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function useNotifications() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Bildirim izni verilmedi.');
      return;
    }
  }

  async function scheduleNotification(content: Notifications.NotificationContentInput, trigger: Notifications.NotificationTriggerInput) {
    await Notifications.scheduleNotificationAsync({ content, trigger });
  }

  return { scheduleNotification };
}
