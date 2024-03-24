import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/subaBaseConfig'
import {useLocalSearchParams, Link, useRouter} from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import CategoryDetailTop from '../components/CategoryDetail/CategoryDetailTop'

const CategoryDetail = () => {

    const {categoryId} = useLocalSearchParams()

    const [categoryInfo, setCategoryInfo] = useState()

    console.log("CATEGORY--->", categoryInfo)

    const gettCategoryDetail = async()=>{
      const { data, error} = await supabase.from('Category')
      .select('*,CategoryItems(*)')
      .eq('id', categoryId)

      setCategoryInfo(data[0])
    }

    useEffect(()=>{
      if(categoryId){gettCategoryDetail()}
    },[categoryId])

    return (
    <View style={styles.categoryContainer}>
      <Ionicons name="arrow-back-circle" size={45} color={'black'}/>
      <CategoryDetailTop categoryInfo={categoryInfo}/>
    </View>
  )
}

export default CategoryDetail

const styles = StyleSheet.create({
  categoryContainer:{
    marginTop: StatusBar.currentHeight,
    padding: 20
  },
  backButton:{

  },

})