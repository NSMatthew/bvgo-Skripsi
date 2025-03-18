import React from 'react';
import { Stack } from 'expo-router';  // Menggunakan Stack untuk navigasi layar

export default function Layout() {
  return (
    <Stack>
      {/* Splash screen sebagai layar pertama */}
      <Stack.Screen 
        name="Splash" // Pastikan nama sesuai dengan file SplashScreen.tsx
        options={{ headerShown: false }} // Menyembunyikan header
      />
      {/* Home screen setelah SplashScreen */}
      <Stack.Screen 
        name="Home" // Pastikan nama sesuai dengan file Home.tsx
        options={{ headerShown: false }} // Menyembunyikan header
      />
    </Stack>
  );
}