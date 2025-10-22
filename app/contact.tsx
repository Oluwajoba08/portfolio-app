import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Contact me</ThemedText>
      <ThemedText style={styles.link}>Email:
        <ThemedText type="defaultSemiBold">
          {' '}
          oluwajobaisaac08@gmail.com
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.link}>Phone:
        <ThemedText type="defaultSemiBold">
          {' '}
          +234 913 655 6727
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.link}>Github:
        <ThemedText type="defaultSemiBold">
          {' '}
          https://github.com/Oluwajoba08
        </ThemedText>
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  link: {
    marginTop: 5,
  },
});
