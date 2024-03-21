import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const CategoryList = ({categorylist}) => {
  return (
    <View style={{marginTop: 150, padding: 20, height: 500, }}>
      <Text style={styles.headerText}>Latest Budget</Text>
        <ScrollView style={{paddingBottom: 100}}>
            {categorylist && categorylist?.map((category, index)=>{
                const lastMargin = index === categorylist.length-1 ? {marginBottom: 60} : {}
                const firstMargin = index === 0 ? {marginTop: 20} : {}
                return (
                    <View style={[styles.container, lastMargin, firstMargin]} key={index}>
                            <View style={styles.iconContainer}>
                                <Text style={[styles.iconText, {backgroundColor:category?.color}]}>
                                    {category.icon}
                                </Text>
                            </View>
                            <View style={styles.subContainer}>
                                <View>
                                    <Text style={styles.categoryText}>{category?.name}</Text>
                                    <Text style={styles.itemCount}>{category?.CategoryItems?.length} Items</Text>
                                </View>
                                <Text style={styles.totalAmmountText}>
                                    ${`420`}
                                </Text>
                            </View>
                    </View>
                )
            })}
        </ScrollView>

    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        flexDirection:"row",
        gap: 10,
        alignItems:"center",
        backgroundColor:colors.WHITE,
        padding: 10,
        borderRadius: 14
    },
    iconContainer:{
        justifyContent:"center",
        alignItems:"baseline"
    },
    iconText:{
        fontSize: 35,
        padding: 16,
        borderRadius: 15,
        width: 80,
        textAlign:"center"
    },
    categoryText:{
        fontFamily:"outfit-bold",
        fontSize:20
    },
    itemCount:{fontFamily:"outfit"},
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"70%"
    },
    totalAmmountText:{
        fontFamily:"outfit-bold",
        fontSize: 17
    },
    headerText:{
        fontSize:25, 
        marginBottom: 10,
        fontFamily:"outfit-bold"
    }
})