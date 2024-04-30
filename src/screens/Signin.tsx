import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header titleHeader="Sign in to your account"/>
      <View style={{ padding: 15 }}>
        <Input
          text="Email"
          placeholder="Enter your email"
          nameIcon={
            <Feather
              name={"mail"}
              style={styles.icon}
              size={22}
              color="black"
            />
          }
        />
        <Input
          text="Password"
          placeholder="Enter your password"
          nameIcon={
            <Feather
              name={"lock"}
              style={styles.icon}
              size={22}
              color="black"
            />
          }
          secureTextEntry={true}
        />
        <View style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPasswordText}>Forget password?</Text>
        </View>
        <Button
          title="Sign In"
          styleBtn={styles.btn}
          styleText={styles.btnText}
          press={() => navigation.navigate("Home")}
        />
        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 25,
          }}
        >
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../assets/images/icons/google.png")}
            />
          </View>
          <View style={[styles.imgContainer, { marginHorizontal: 30 }]}>
            <Image
              style={styles.img}
              source={require("../assets/images/icons/facebook.png")}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../assets/images/icons/twitter.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 10,
    top: 35,
    zIndex: 1,
  },
  forgetPasswordContainer: {
    alignItems: "flex-end",
    width: "auto",
    marginLeft: 20,
    marginTop: 5,
  },
  forgetPasswordText: {
    fontSize: 16,
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
  orContainer: {
    borderTopColor: "#ECF0F3",
    borderWidth: 0.3,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  orText: {
    position: "absolute",
    backgroundColor: "white",
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  imgContainer: {
    borderColor: "#ECF0F3",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  img: {
    width: 25,
    height: 25,
  },
});
