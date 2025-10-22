import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { colors } from './styles';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>Who is Oluwajoba?</ThemedText>
      <ThemedText style={styles.body}>
      Oluwajoba is a seasoned developer with over 3 years of experience crafting visually appealing web applications. 
      He specializes in front-end development, with a keen eye for design and user experience.
      </ThemedText>
      <ThemedText type="title" style={styles.header}>What does he do?</ThemedText>
      <ThemedText style={styles.body}>
      He builds responsive and interactive web applications using modern technologies such as React, JavaScript, HTML, CSS, and TailwindCSS.
      </ThemedText>
      <ThemedText type="title" style={styles.header}>Why choose him?</ThemedText>
      <ThemedText style={styles.body}>
      Oluwajoba is passionate about creating high-quality web applications that not only look great but also provide an exceptional user experience. 
      His attention to detail, creativity, and dedication to his craft make him a valuable asset to any project.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 5,
    color: colors.muted,
  },
  body: {
    marginVertical: 10,
  },
});
