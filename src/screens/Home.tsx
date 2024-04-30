import { ScrollView, StyleSheet, Text, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/actions";
import { FlatList } from "react-native";


const Home = () => {
  
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  console.log(state.data);

  useEffect(()=>{
    dispatch(getData())
  },[])
if(!state.data?.length){

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text style={{fontSize:25,fontWeight:'700'}} >Loading...</Text>
    </View>
  )
}

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HomeHeader />
      <View style={{ padding: 15 }}>
        <FlatList
          data={state.data}
          renderItem={({ item }) => (
            <Card
              date={item.datetime}
              degrees={item.temp}
              location={item.wind_cdir_full}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
