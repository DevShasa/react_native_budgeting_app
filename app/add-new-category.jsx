import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import colors from "../utils/colors";
import ColorPicker from "../components/ColorPicker";

export default function AddNewCategory() {
	const [selectedIcon, setSelectedIcon] = useState("IC");
    const [selectedColor, setSelectedColor] = useState(colors.PRIMARY)

    function changeColor(color){
        setSelectedColor(color)
    }

    return (
		<View style={styles.container}>
			<View style={{justifyContent:"center", alignItems:"center"}}>
				<TextInput 
                    style={[styles.textIconInput, {backgroundColor:selectedColor}]} 
                    maxLength={2}
                    onChangeText={setSelectedIcon}
                >   
                    {selectedIcon}
                </TextInput>
                <ColorPicker changeColor={changeColor} selectedColor={selectedColor}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 20,
	},
	textIconInput: {
		textAlign: "center",
		fontSize: 30,
        padding: 20,
        borderRadius: 99,
        paddingHorizontal: 24,
        color: "white"
	},
});
