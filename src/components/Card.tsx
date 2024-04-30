import { Image, ImageBackground } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';

type props ={
  location:string,
  date:string,
  degrees:number
}

const Card = ({location='cairo',date='2023-12-20',degrees=28}:props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.img}
        source={require("../assets/images/card.webp")}
      />
      <View style={styles.icon} >
<FontAwesome6  name="cloud-sun-rain" size={24} color="#FFC700" />
<Text style={{color:'#FF8862',marginLeft:10}}>{degrees}</Text>
      </View>
      <View
        style={styles.locationAndTime}
      >
        <View style={{ flexDirection: "row",justifyContent:'center' }}>
          <Entypo name="location-pin" size={20} color="#FF8862" />
          <Text style={{color:'gray'}} >{location}</Text>
        </View>
        <View style={{ flexDirection: "row",justifyContent:'center'  }}>
          <AntDesign name="calendar" size={20} color="#FF8862" />
          <Text style={{marginLeft:10,color:'gray'}} >{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    borderRadius:15
  },
  locationAndTime: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    padding:5,
    alignItems:'center',
    bottom:15
  },
  icon:{
    position:'absolute',
    left:15,
    top:15,
    flexDirection:'row'
  }
});
