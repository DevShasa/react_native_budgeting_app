import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { supabase } from '../utils/subaBaseConfig'
import {useLocalSearchParams, Link, useRouter} from 'expo-router'


const CategoryDetail = () => {

    const {categoryId} = useLocalSearchParams()

    console.log("THE CATEGORY ID IS--->",categoryId)

    // async function getIndividualCategory(){
    //     const {data, error} = await supabase.from("Category")
        
    // }

    return (
    <View>
      <Text>CategoryDetail</Text>
    </View>
  )
}

export default CategoryDetail

const styles = StyleSheet.create({})