import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native"
import { Button, Text } from "react-native-elements"
import React, { useState } from "react"

const PlaceholderImage = require("../assets/logo.png")

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text h3 style={{ marginBottom: 20 }}>
        Aries Clinic
      </Text>
      <StatusBar style="light" />
      <View>
        <TextInput
          style={styles.inputContainer}
          placeholder="email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
        />
        <TextInput
          style={styles.inputContainer}
          secureTextEntry
          placeholder="password"
          type="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Login"
        onPress={() => console.log()}
      />
      <Button
        containerStyle={styles.button}
        title="Register"
        onPress={() => navigation.navigate("Register")}
        type="outline"
      />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  imageContainer: {},
  inputContainer: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
  },
  button: { width: 200, marginTop: 10 },
})
