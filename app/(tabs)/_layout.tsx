import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="Splash"> {/* Pastikan SplashScreen muncul pertama kali */}
      <Stack.Screen name="Splash" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
}
