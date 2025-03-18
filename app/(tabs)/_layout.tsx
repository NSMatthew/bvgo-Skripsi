import React from 'react';
import { Stack } from 'expo-router';  // Gunakan Stack untuk navigasi antar layar

export default function Layout() {
  return (
    <Stack>
      {/* Splash Screen pertama kali ditampilkan */}
      <Stack.Screen 
        name="Splash" 
        options={{ headerShown: false }}  // Menyembunyikan header untuk SplashScreen
      />
      {/* Home Screen setelah Splash Screen */}
      <Stack.Screen 
        name="Home" 
        options={{ headerShown: false }}  // Menyembunyikan header untuk HomeScreen
      />
    </Stack>
  );
}