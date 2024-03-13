import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import services from "../../utils/services";
import { client } from "../../utils/KindeConfig";
import { supabase } from "../../utils/subaBaseConfig";
import Header from "../../components/Header";
import colors from "../../utils/colors";
import CircularChart from "../../components/CircularChart";
import {Ionicons} from "@expo/vector-icons"

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
			<View style={styles.header}>
				<Header />
				<CircularChart />
			</View>
			<Link style={styles.addButton} href={'/add-new-category'}>
				<Ionicons name="add-circle" size={54} color={colors.PRIMARY} />
			</Link>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1
	},
	header:{
		backgroundColor: colors.PRIMARY,
		height: 150,
		padding: 20,
	},
	text: {
		fontSize: 20,
	},
	addButton:{
		position:"absolute",
		bottom: 16, 
		right: 16
	}
});
