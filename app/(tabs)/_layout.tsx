import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="/Screen/SplashScreen">  {/* Set SplashScreen as the first screen */}
      <Stack.Screen 
        name="/Screen/SplashScreen"  // Define SplashScreen as a route
        options={{ headerShown: false }}  // Hide the header for SplashScreen
      />
      <Stack.Screen 
        name="/Screen/Home"  // Define Home as a route
        options={{ headerShown: false }}  // Hide the header for HomeScreen
      />
    </Stack>
  );
}