import React from 'react';
import { Redirect, Stack } from 'expo-router';

export default function Index() {
  return (
    <>
      {/* Redirect hanya dijalankan jika aplikasi pertama kali dibuka */}
      <Redirect href="/Screen/SplashScreen" />

      {/* Stack Navigator untuk mengatur navigasi */}
      <Stack initialRouteName="Splash"> 
        <Stack.Screen 
          name="Splash"  
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Home"  
          options={{ headerShown: false }}  
        />
      </Stack>
    </>
  );
}
