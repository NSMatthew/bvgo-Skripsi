import React from 'react';
import { Redirect, Stack } from 'expo-router';

export default function Index() {
  return (
    <>
      {/* Redirect ensures the app navigates to the SplashScreen first */}
      <Redirect href="../Screen/SplashScreen" />

      {/* Stack Navigator to handle the navigation between screens */}
      <Stack initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }} // Hide header for Splash screen
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }} // Hide header for Home screen
        />
      </Stack>
    </>
  );
}