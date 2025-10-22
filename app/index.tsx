import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet } from 'react-native';
import { typography } from "./styles";

export default function Index() {

  return (
    <ScrollView style={[styles.container, { paddingBottom: 20}]}>
        <ThemedView style={{ position: 'relative' }}>
            <Image source={require("@/assets/images/innovation.jpg")} style={styles.coverImage} />
            <ThemedView style={{ padding: 20, marginTop: 40, alignItems: 'center' }}>
                <ThemedText style={[typography.title, { padding: 5, fontWeight: 'bold' }]}>Oluwajoba Bukola</ThemedText>
                <ThemedText style={[typography.subtitle, { padding: 5 }]}>Software Engineer</ThemedText>
            </ThemedView>
            <Image source={require("@/assets/images/jb-purity.jpg")} style={styles.profileImage} />
        </ThemedView>
        <ThemedView style={{ padding: 20, marginVertical: 10 }}>
            <ThemedText type='subtitle'>Skills</ThemedText>
            <ThemedView style={styles.skillsContainer}>
                <ThemedView style={styles.skills}>
                    <Image source={require("@/assets/images/js-logo.png")} style={styles.skillImage} contentFit='contain' />
                    <ThemedView style={styles.skillTextWrapper}>
                        <ThemedText type='defaultSemiBold'>Javascript</ThemedText>
                        <ThemedText style={[typography.subtitle, { fontSize: 14 }]}>Expert</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.skills}>
                    <Image source={require("@/assets/images/html5.svg")} style={styles.skillImage} />
                    <ThemedView style={styles.skillTextWrapper}>
                        <ThemedText type='defaultSemiBold'>HTML</ThemedText>
                        <ThemedText style={[typography.subtitle, { fontSize: 14 }]}>Veteran</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.skills}>
                    <Image source={require("@/assets/images/css.svg")} style={styles.skillImage} />
                    <ThemedView style={styles.skillTextWrapper}>
                        <ThemedText type='defaultSemiBold'>CSS</ThemedText>
                        <ThemedText style={[typography.subtitle, { fontSize: 14 }]}>Expert</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.skills}>
                    <Image source={require("@/assets/images/tailwindcss.svg")} style={styles.skillImage} />
                    <ThemedView style={styles.skillTextWrapper}>
                        <ThemedText type='defaultSemiBold'>TailwindCSS</ThemedText>
                        <ThemedText style={[typography.subtitle, { fontSize: 14 }]}>Pro</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.skills}>
                    <Image source={require("@/assets/images/figma.svg")} style={styles.skillImage} />
                    <ThemedView style={styles.skillTextWrapper}>
                        <ThemedText type='defaultSemiBold'>Figma</ThemedText>
                        <ThemedText style={[typography.subtitle, { fontSize: 14 }]}>Expert</ThemedText>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={styles.skills}>
                    <Image source={require("@/assets/images/github-icon.svg")} style={styles.skillImage} />
                    <ThemedView style={styles.skillTextWrapper}>
                        <ThemedText type='defaultSemiBold'>Github</ThemedText>
                        <ThemedText style={[typography.subtitle, { fontSize: 14 }]}>Veteran</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    left: "50%",
    top: 50,
    transform: [{ translateX: -50 }],
    outlineWidth: 4,
    outlineColor: "#11e67cc5",
    outlineOffset: 2,
  },
  coverImage: {
    width: '100%',
    height: 100,
  },
  skillsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  skills:{
    borderRadius: 10,
    backgroundColor: '#f0f0f0ff',
    borderWidth: 2,
    margin: 5,
    flex: 1,
    minWidth: 100,
    // height: 'auto',
  },
  skillImage: {
    height: 100,
    width: '100%',
  },
  skillTextWrapper: {
    padding: 5, 
    borderTopWidth: 2, 
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
