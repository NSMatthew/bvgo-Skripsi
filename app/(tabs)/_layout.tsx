import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="Splash">  {/* Set SplashScreen as the first screen */}
      <Stack.Screen name="Splash"  // Define SplashScreen as a route (no need for "/Screen/...")
        options={{ headerShown: false }}  // Hide the header for SplashScreen
      />
      <Stack.Screen name="Home"  // Define Home as a route (no need for "/Screen/...")
        options={{ headerShown: false }}  // Hide the header for HomeScreen
      />
    </Stack>
  );
}