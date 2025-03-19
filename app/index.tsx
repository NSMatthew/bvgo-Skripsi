import React from "react";
import { Stack } from "expo-router";

export default function Index() {
  return (
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
  );
}
