import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HomeHeader = () => {
  const navigation = useNavigation()
  return (
    <View>

    <View style={styles.container} >
      <Text style={styles.headerText} >App Weather</Text>
    </View>
    <Button press={()=>navigation.goBack()} styleBtn={styles.btn} styleText={styles.btnText} title={<MaterialIcons name="arrow-back-ios-new" size={18} color="white" />}  />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D26060',
        justifyContent:'center',
        alignItems:'center',
        height:120,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        width:420,
        right:15
        
    },
    headerText:{
        color:'white',
        fontSize:30,
        fontWeight:'700',
        bottom:7
    },
    btn: {
        width: 45,
        height: 45,
        backgroundColor: "#6556CC",
        borderRadius: 25,
        position: "absolute",
        alignItems:'center',
        justifyContent:'center',
        margin:15,
        marginTop:35
      },
      btnText:{
        fontSize:5
      },

})