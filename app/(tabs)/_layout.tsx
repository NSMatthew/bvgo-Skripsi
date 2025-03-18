import React from 'react';
import { Stack } from 'expo-router'; // Import Stack untuk navigasi antar screen

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="Splash" // SplashScreen akan ditampilkan pertama kali
        options={{ headerShown: false }}  // Menyembunyikan header pada SplashScreen
      />
      <Stack.Screen 
        name="Home" // Setelah SplashScreen, akan menuju HomeScreen
        options={{ headerShown: false }}  // Menyembunyikan header pada HomeScreen
      />
    </Stack>
  );
}