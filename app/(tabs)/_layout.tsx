import { Stack } from 'expo-router';
import { RootStackParamList } from '../Navigation/types';

export default function Layout() {
  return (
    <Stack>
      {/* Menggunakan nama yang sesuai dengan yang ada di RootStackParamList */}
      <Stack.Screen name="Splash" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
}