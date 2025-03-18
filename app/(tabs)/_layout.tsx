import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="Splash"> {/* Ensure SplashScreen loads first */}
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }} // Hide header for SplashScreen
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }} // Hide header for Home screen
      />
    </Stack>
  );
}
