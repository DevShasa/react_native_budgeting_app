import { StyleSheet, Text, View } from 'react-native'
import {useState, useEffect} from 'react'
import PieChart from 'react-native-pie-chart'
import colors from '../utils/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function CircularChart() {

    const [series, setSeries] = useState([1])
    const [sliceColor, setSliceColor] = useState([colors.GRAY])

  return (
    <View style={styles.donutContainer}>
      <Text style={styles.donutHeader}>Total Estimate : <Text style={{fontFamily:"outfit-bold"}}>0$</Text></Text>

      <View style={styles.donutHolder}>
        <PieChart 
            widthAndHeight={150}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.75}
            coverFill={"#fff"}
        />
        <View style={styles.donutText}>
            <MaterialCommunityIcons name="checkbox-blank-circle" color={colors.GREY} size={24} />
            <Text>N/A</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    donutContainer:{
        marginTop: 20,
        backgroundColor:colors.WHITE,
        padding: 20,
        borderRadius: 15,
        elevation: 1
    }, 
    donutHeader:{
        fontSize: 20,
        fontFamily:"outfit-medium"
    },
    donutHolder:{
        marginTop:10,
        flexDirection:"row",
        gap: 40,
        // alignItems:"center"
    },
    donutText:{
        flexDirection:"row",
        gap: 5,
        alignItems:"center"
    }
})