import AsyncStorage from "@react-native-async-storage/async-storage";

 async function storeData(key, value){
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.log("ERROR STORING ITEM IN ASYNCSTORAGE:::", error)
    }
}

 async function getData(key){
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null){
            return value
        }
    } catch (error) {
        console.log("ERROR FETCHING ITEM FROM ASYNCSTORAGE:::", error)
    }
}

 async function clearItems(){
    await AsyncStorage.clear()
}

export default  {storeData, getData, clearItems}