import { useFonts } from "expo-font";
import { Stack } from "expo-router/stack";
import React from "react";
import { View } from "react-native";
/**
 * This is the main navigation file for entire app
 */
export default function HomeLayout() {
	const [fontsLoaded, fontError] = useFonts({
		outfit: require("../assets/fonts/Outfit-Regular.ttf"),
		"outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
		"outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
	});

	return (
		<Stack screenOptions={{headerShown:false}}>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="add-new-category"
				options={{
					headerShown: true,
					presentation: "modal",
					headerTitle: "Add new category",
				}}
			/>
		</Stack>
	);
}
