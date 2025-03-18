import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* File SplashScreen.tsx akan otomatis di-render sebagai screen pertama */}
      <Stack.Screen name="Splash" options={{ headerShown: false }} />

      {/* File HomeScreen.tsx akan otomatis di-render setelah SplashScreen */}
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
}