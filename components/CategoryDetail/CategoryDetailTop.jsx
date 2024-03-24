import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CategoryDetailTop = ({categoryInfo}) => {
  return (
    <View style={styles.main} >
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Text style={[styles.textIcon, {backgroundColor:categoryInfo?.color}]}>
                    {categoryInfo?.icon}
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.categoryName}>{categoryInfo?.name}</Text>
                <Text style={styles.categoryItemText}>{categoryInfo?.CategoryItems.length} Item</Text>
            </View>
            <TouchableOpacity>
                <Ionicons   name="trash" size={24} color="red"/>
            </TouchableOpacity>
        </View>
        {/* HERE LIES THE PROGRESS BAR */}
    </View>
  )
}

export default CategoryDetailTop

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        gap: 20
    },
    iconContainer:{},
    textIcon:{
        fontSize: 35,
        padding: 20,
        borderRadius: 15
    },
    ammountContainer:{},
    progressBarMainContainer:{},
    progressBarSubContainer:{},
    categoryName:{
        fontFamily:"outfit-bold",
        fontSize: 24
    },
    categoryItemText:{
        fontFamily:'outfit',
        fontSize: 16
    }
})