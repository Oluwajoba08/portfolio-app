import CustomDrawerContent from '@/components/CustomDrawerContent';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

SplashScreen.preventAutoHideAsync(); // keep splash until ready

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/inter-thin.ttf'),
    'Inter-Medium': require('../assets/fonts/inter-medium.ttf'),
    'Inter-Bold': require('../assets/fonts/inter-variable.ttf')
  });

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1, }} onLayout={onLayout}>
        <Drawer drawerContent={CustomDrawerContent}>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'Home',
              title: 'My Portfolio',
              drawerIcon: ({ color, size }) => (
                <Ionicons name='home-outline' size={size} color={color} />
              ) 
            }}
          />
          <Drawer.Screen
            name="about" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'About',
              title: 'About',
              drawerIcon: ({ color, size }) => (
                <Ionicons name='information-circle-outline' size={size} color={color} />
              ) 
            }}
          />
          <Drawer.Screen
            name="contact" 
            options={{
              drawerLabel: 'Contact',
              title: 'Contact',
              drawerIcon: ({ color, size }) => (
                <Ionicons name='call-outline' size={size} color={color} />
              ) 
            }}
          />
        </Drawer>
        {/* <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack> */}
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
