import { Stack } from 'expo-router';
import { RootStackParamList } from '../Navigation/types'; // Import parameter tipe untuk route

export default function Layout() {
  return (
    <Stack>
      {/* File SplashScreen.tsx akan otomatis di-render sebagai screen pertama */}
      <Stack.Screen 
        name="Splash" // Nama file SplashScreen.tsx 
        options={{ headerShown: false }} // Menyembunyikan header untuk SplashScreen
      />
      {/* File HomeScreen.tsx akan otomatis di-render setelah SplashScreen */}
      <Stack.Screen 
        name="Home"  // Nama file HomeScreen.tsx 
        options={{ headerShown: false }}  // Menyembunyikan header untuk HomeScreen
      />
    </Stack>
  );
}