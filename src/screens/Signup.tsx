import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";
import { Feather } from '@expo/vector-icons';
import { CheckBox } from "react-native-elements";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Signup = () => {
  const [showPassword,setShowPassword] = useState(true)
  const [showConfirmPassword,setShowConfirmPassword] = useState(true)
  const [checkBox,setCheckBox] = useState(false)
  const navigation = useNavigation()
  return (
    <View  style={{ flex: 1, backgroundColor: "white",position:'relative' }}>
      <Header titleHeader="Sign up to your account" />
      <KeyboardAvoidingView behavior={'position'}  >
<View style={{backgroundColor:'white',padding:20,paddingBottom:0,borderRadius:15 }} >
<Input text="User name" placeholder="Enter your name" />
      <Input text="Email" placeholder="Enter your email" />
      <Input text="Password" placeholder="Enter your password"  secureTextEntry={showPassword}
       nameIcon={  <Feather onPress={()=>setShowPassword(!showPassword)} name={ showPassword? "eye":'eye-off'} style={styles.icon} size={25}color="gray" /> }/>
      <Input text="Confirm Password" placeholder="Enter your password" secureTextEntry={showConfirmPassword}
       nameIcon={<Feather onPress={()=>setShowConfirmPassword(!showConfirmPassword)} name={ showConfirmPassword? "eye":'eye-off'} style={styles.icon} size={25}color="gray" />}/>
       <View style={styles.checkboxContainer} >
       <CheckBox checked={checkBox} checkedColor="black" onPress={() => setCheckBox(!checkBox)} />
      <Text style={styles.checkboxText} >I accept & agree terms conditions & privacy policy</Text>
       </View>
       <Button
          title="Sign In"
          styleBtn={styles.btn}
          styleText={styles.btnText}
          press={() => navigation.navigate("Signin")}
          
        />
</View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 15,
    top: 35,
    zIndex: 1,
  },
  checkboxContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  checkboxText:{
    width:250,
    right:15
  },
  btn: {
    backgroundColor: "#5B4DBC",
    width: "auto",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 25,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
});
