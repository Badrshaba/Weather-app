import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
type props ={
  titleHeader:string
}
const Header = ({titleHeader}:props) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView  >
      <Image
        style={styles.img}
        source={require("../assets/images/header.jpg")}
      />
      <Button press={()=>navigation.goBack()} styleBtn={styles.btn} styleText={styles.btnText} title={<MaterialIcons name="arrow-back-ios-new" size={18} color="white" />}  />
      <Text  style={styles.headerText}>{titleHeader}</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  img: {
    width: "106%",
    height: 230,
    borderBottomLeftRadius: 65,
    left: -20,
    resizeMode: "cover",
  },
  btn: {
    width: 45,
    height: 45,
    backgroundColor: "#B7BAE4",
    borderRadius: 25,
    position: "absolute",
    alignItems:'center',
    justifyContent:'center',
    margin:15,
    marginTop:25
  },
  btnText:{
    fontSize:5
  },
  headerText:{
    position: "absolute" ,
    fontSize:32,
    fontWeight:'bold',
    color:'white',
    top:80,
    marginHorizontal:15,
    width:250
  }
});
