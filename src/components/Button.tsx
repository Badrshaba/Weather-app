import { Pressable, StyleSheet, Text, View } from 'react-native'

type props = {
    styleBtn:object,
    styleText:object,
    title:string | React.ReactNode,
    press?:()=>void
}

const Button = ({styleBtn,styleText,title,press }:props) => {
  return (
    <Pressable style={styleBtn} onPress={press} >
      <Text style={styleText} >{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({})