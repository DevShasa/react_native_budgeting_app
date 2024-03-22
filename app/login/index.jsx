import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import loginBg from "../../assets/images/loginbg.png"
import colors from '../../utils/colors'
import { client } from '../../utils/KindeConfig'
import services from '../../utils/services'
import { useRouter } from 'expo-router'




export default function LoginScreen() {
 
  const router = useRouter()

  const handleSignIn = async ()=>{
    const token = await client.login();
    if(token){
      // the user was authenticated 
      console.log("TOKEN FROM KINDE", token)
      await services.storeData("login", "true")

      router.replace("/")
    }
  }
 
  return (
    <View style={styles.imageContainer}>
      <Image source={loginBg} style={styles.bgImage}/>
      <View style={styles.textContainer}>
        <Text style={styles.loginHeaderText}>Personal Budget Planner</Text>
        <Text style={styles.loginText}>
          Stay on Track, Event by Event: Your Personal Budget App
        </Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn} >
          <Text style={styles.loginbuttontext}>Login/Signup</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 13, color:colors.GREY, marginTop:10}}>* By logging in, you agree to our terms and conditions</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        alignItems:"center",
        marginTop: 20
    },  
    bgImage:{
        width: 200,
        height: 400,
        marginTop: 17,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: colors.BLACK
    },
    textContainer:{
        width:"100%",
        height:"56%",
        backgroundColor: "#8B42FC",
        padding: 20,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    loginHeaderText:{
        fontSize:35,
        fontWeight:"bold",
        textAlign:"center",
        color:colors.WHITE
    },
    loginText:{
      fontSize: 18,
      textAlign:"center",
      color:colors.WHITE,
      marginTop:20
    },
    loginButton:{
      padding: 15,
      backgroundColor:colors.WHITE,
      paddingHorizontal: 5,
      borderRadius: 99,
      marginTop:30
    },
    loginbuttontext:{
      textAlign:"center",
      color:colors.PRIMARY
    }
})