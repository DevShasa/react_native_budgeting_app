import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";

const ColorPicker = ({changeColor,selectedColor }) => {
	return (
		<View style={{
            flexDirection: "row",
            marginTop: 20,
            gap: 20
        }}>
			{colors.COLOR_LIST.map((color, index) => {
                const calcborderwidth = selectedColor === color ? 2: 0
                //console.log(`SELECTED COLOR ---> ${selectedColor}, PRESENTCOLOR --->${color}`)
				return <TouchableOpacity
                    style={[
                        styles.colorbox,
                        {
                            backgroundColor: color,
                            borderWidth: calcborderwidth
                        }
                        
                    ]}
                    key={color + index}
                    onPress={()=>changeColor(color)}
                >

                </TouchableOpacity>;
			})}
		</View>
	);
};

export default ColorPicker;

const styles = StyleSheet.create({
    colorbox:{
        height: 30, width: 30, borderRadius: 99,
        borderColor: "black",
    }
});
