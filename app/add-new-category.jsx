import { StyleSheet, Text, TextInput, View, ToastAndroid } from "react-native";
import { useState } from "react";
import colors from "../utils/colors";
import ColorPicker from "../components/ColorPicker";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons"
import { useRouter } from "expo-router";
import { client } from "../utils/KindeConfig";
import { supabase } from "../utils/subaBaseConfig";

export default function AddNewCategory() {
	const [selectedIcon, setSelectedIcon] = useState("IC");
    const [selectedColor, setSelectedColor] = useState(colors.PRIMARY)
    const [ categoryName, setCategoryName ] = useState()
    const [totalBudget, setTotalBudget] = useState()
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    /**
     * Function to create a new entry in the supabase category table
     */
    async function createNewCategory(){
        const email = (await client.getUserDetails()).email
        try {
            if(!email) throw new Error("USER EMAIL FROM KINDE NOT PRESENT")
            if(!categoryName || !totalBudget || !selectedIcon || !selectedColor){
                throw new Error("Some inputs are empty")
            }
            setLoading(true )
            // pass the data into supabase
            const {data, error} = await supabase.from('Category')
            .insert([{
                name:categoryName,
                assigned_budget: totalBudget, 
                icon: selectedIcon, 
                color: selectedColor, 
                created_by: email
            }])
            .select()

            console.log("RESULT AFTER CREATING CATEGORY:::", data)


            if(!data) throw new Error("UPLOAD TO SUPABASE FAIL")

            // IF WE REACH HERE WE GOOD
            ToastAndroid.show("Category Created", ToastAndroid.SHORT)
            // router.replace({
            //     pathname:'/category-detail',
            //     params:{
            //         categoryId: data[0]
            //     }
            // })

        } catch (error) {
            console.log(error.message, error)
        } finally{
            setLoading(false)
        }
    }

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
    inputView:{

    },
    createCategoryButton:{

    }
});
