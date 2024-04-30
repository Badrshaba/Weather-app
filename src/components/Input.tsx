import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, TextInput, View } from "react-native";


type props = {
    placeholder:string,
    text:string,
    nameIcon?:React.ReactNode,
    secureTextEntry?:boolean
}

const Input = ({placeholder,text,nameIcon,secureTextEntry=false}:props) => {
  return (
    <KeyboardAvoidingView behavior="height">
         {nameIcon&&nameIcon } 
      <Text style={styles.textInput}>{text}</Text>
      <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "auto",
    height: 58,
    borderWidth: 1,
    borderColor: "#E5EAED",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    backgroundColor: "white",
  },
  textInput: {
    left: 20,
    top: 9,
    zIndex: 1,
    backgroundColor: "white",
    alignSelf:'flex-start',
    textAlign: "center",
    paddingHorizontal:10
  },

});
