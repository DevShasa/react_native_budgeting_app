import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

const TabLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: colors.PRIMARY,
        }}
        
    >
        <Tabs.Screen 
            name='index'
            options={{
                title:"Home",
                tabBarIcon:({color}) => <FontAwesome  size={28} name='home' color={color}/>
            }}
        />
        <Tabs.Screen 
            name='history'
            options={{
                title:"History",
                tabBarIcon:({color}) => <FontAwesome  size={28} name='history' color={color}/>
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title:"Profile",
                tabBarIcon:({color}) => <FontAwesome  size={28} name='user' color={color}/>
            }}
        />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})