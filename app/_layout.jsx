import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'

/**
 * This is the main navigation file for entire app
 */
export default function HomeLayout() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require("../assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("../assets/fonts/Outfit-Medium.ttf"),
    'outfit-bold': require("../assets/fonts/Outfit-Bold.ttf"),

  });

  return (
      <Stack screenOptions={{ headerShown:false }} >
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
      </Stack>

  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20
  }
})