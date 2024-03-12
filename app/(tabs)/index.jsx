import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../../utils/services' 
import { client } from '../../utils/KindeConfig'


export default function Home() {

    const router = useRouter()

    /**
     * Check if user is authenticated
     */
    const checkUserAuth = async()=>{
        const result = await services.getData("login")
        services
        if(!result){
            // redirect to login page
            router.replace("/login")
        }
        console.log("LOG IN --->",result)
    }


    const handleLogout = async()=>{
      const loggedOut = await client.logout()
      if(loggedOut){
        await services.clearItems()
        router.replace("/login")
      }
    }

    useEffect(()=>{
        checkUserAuth()
    },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guruji my maan</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    //   marginTop: 20
    },
    text:{
        fontSize: 20,
    }
})