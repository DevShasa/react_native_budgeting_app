import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import services from "../../utils/services";
import { client } from "../../utils/KindeConfig";
import { supabase } from "../../utils/subaBaseConfig";
import Header from "../../components/Header";
import colors from "../../utils/colors";
import CircularChart from "../../components/CircularChart";

export default function Home() {
	const router = useRouter();

	/**
	 * Check if user is authenticated
	 */
	const checkUserAuth = async () => {
		const result = await services.getData("login");

		services;
		if (!result) {
			// redirect to login page
			router.replace("/login");
		}
	};

	// Fetch all categories that belong to a specific user
	const getUsersCategory = async () => {
		const user = await client.getUserDetails();

        let { data: Category, error } = await supabase
        .from('Category')
        .select('*')        
		.eq("created_by", user.email);

	};

	const handleLogout = async () => {
		const loggedOut = await client.logout();
		if (loggedOut) {
			await services.clearItems();
			router.replace("/login");
		}
	};

	useEffect(() => {
		checkUserAuth();
        getUsersCategory()
	}, []);

	return (
		<View style={styles.container}>
			<Header />
			<CircularChart />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 20,
		backgroundColor: colors.PRIMARY,
		// we fix height of container so other components overflow
		height: 150
	},
	text: {
		fontSize: 20,
	},
});
