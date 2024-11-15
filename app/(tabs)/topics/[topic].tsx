// app/(tabs)/topics/[topic].tsx
import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import suggestionsData, { Topic } from '@/data/TRsuggestions';

export default function TopicScreen() {
  const { topic } = useLocalSearchParams();

  if (!topic || Array.isArray(topic)) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Konu bulunamadı</Text>
      </View>
    );
  }

  if (!isTopic(topic)) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Konu bulunamadı</Text>
      </View>
    );
  }

  const topicName = suggestionsData[topic].name; // Türkçe isim
  const suggestions = suggestionsData[topic].suggestions;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{topicName} Önerileri</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.title} //funny
        renderItem={({ item }) => (
          <Text style={styles.suggestion}>{item.text}</Text>
        )}
      />
    </View>
  );
}

function isTopic(value: string): value is Topic {
  return ['health', 'motivation', 'nutrition', 'sports', 'personal_development'].includes(value);
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  suggestion: { fontSize: 18, marginVertical: 5 },
});
