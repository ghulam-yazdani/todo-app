import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Alert
} from "react-native";


export default function App() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image source={require("./assets/a2zcreatorz-logo.png")} />
        <Text style={styles.text2}> A2Z Employee Login</Text>
        <View>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 25,
              width: 200,
              textAlign: "center",
              marginTop: 30,
            }}
            placeholder="username"
          />
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 25,
              width: 200,
              textAlign: "center",
              marginTop: 10,
            }}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>

        <Button
          title="Login"
          color="orange"
          onPress={() =>
            Alert.alert("Under construction we will get back to you soon !")
          }
        />
        <View style={styles.buttons}>
          <Text style={styles.text1}>Don't have an account?</Text>
          <Button
            title="Sign up"
            color="orange"
            onPress={() =>
              Alert.alert("Under construction we will get back to you Shortly !")
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    alignItems: "center",
    lineHeight: 40,
    borderRightWidth: 1,
    borderColor: "#000",
    fontSize: 16
  },
  text2: {
    alignItems: "center",
    paddingTop: 30,
    fontSize: 26,
    color: "#ff9000",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
