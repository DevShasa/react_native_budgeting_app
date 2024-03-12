import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

/**
 * This is the main navigation file for entire app
 */
export default function HomeLayout() {
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