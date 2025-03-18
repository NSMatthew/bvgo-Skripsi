import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="Screen/SplashScreen">  
      <Stack.Screen name="Screen/SplashScreen" options={{ headerShown: false }} />
      <Stack.Screen name="Screen/Home" options={{ headerShown: false }} />
    </Stack>
  );
}