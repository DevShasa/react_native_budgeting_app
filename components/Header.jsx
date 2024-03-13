import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { client } from "../utils/KindeConfig";
import colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
	const [user, setUser] = useState();

	async function getUserDetails() {
		const user = await client.getUserDetails();

		if (user) {
			setUser(user);
		}
	}

	useEffect(() => {
		// get user data and place it in the state above
		getUserDetails();
	}, []);

	console.log("USER FROM THE HEADER:::>", user);

	return (
		<View style={styles.headerContainer}>
			<Image style={styles.headerImage} source={{ uri: user?.picture }} />
			<View style={styles.namecard}>
				<View>
					<Text style={[styles.whiteText]}>Welcome</Text>
					<Text style={[styles.whiteText, { fontSize: 20, fontFamily:"outfit-bold" }]}>
						{user?.given_name}
					</Text>
				</View>
				<Ionicons name="notifications" size={24} color="white" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	headerImage: {
		width: 50,
		height: 50,
		borderRadius: 99,
	},
	whiteText: {
		color: colors.WHITE,
		fontSize: 16,
		fontFamily: "outfit",
	},
	namecard: {
		width: "85%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
