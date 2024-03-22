import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import CategoryList from "../../components/CategoryList";
import CircularChart from "../../components/CircularChart";
import Header from "../../components/Header";
import { client } from "../../utils/KindeConfig";
import colors from "../../utils/colors";
import services from "../../utils/services";
import { supabase } from "../../utils/subaBaseConfig";

export default function Home() {
	const router = useRouter();

	const [categoryList, setCategoryList] = useState()
	//console.log("HOMEPAGE CATEGORY LIST-->", categoryList)

	/**
	 * Check if user is authenticated
	 */
	const checkUserAuth = async () => {
		const result = await services.getData("login");
		if (!result) { router.replace("/login"); }
	};

	/**
	 * USER AUTHENTICATED ZONE
	 */
	
	// Fetch all categories that belong to a specific user
	const getUsersCategory = async () => {
		const user = await client.getUserDetails();

        let { data: Category, error } = await supabase
        .from('Category')
        .select('*, CategoryItems(*)' )        
		.eq("created_by", user.email);

		setCategoryList(Category)
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
			<CategoryList categorylist={categoryList} />
			<Link style={styles.addButton} href={"/add-new-category"}>
				<Ionicons name="add-circle" size={54} color={colors.PRIMARY} />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight  ,
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
