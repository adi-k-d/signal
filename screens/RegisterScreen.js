import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import React, { useState, useLayoutEffect } from "react"
import { Button, Input, Text } from "react-native-elements"

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const PlaceholderImage = require("../assets/logo.png")

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerBackTitle: "Back",
  //   })
  // }, [navigation])

  const register = () => {}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 20 }}>
        Create An Account
      </Text>

      <View>
        <TextInput
          placeholder="Full Name"
          autoFocus
          style={styles.inputContainer}
          type="text"
          value={name}
          onChangeText={(text) => {
            setName(text)
          }}
        />
        <TextInput
          placeholder="Email"
          type="email"
          style={styles.inputContainer}
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
        />
        <TextInput
          placeholder="Password"
          type="password"
          style={styles.inputContainer}
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
        />
        <TextInput
          placeholder="Profile Picture"
          type="text"
          style={styles.inputContainer}
          value={imageUrl}
          onChangeText={(text) => {
            setImageUrl(text)
          }}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        title="Register"
        onPress={register}
      />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: { width: 200, marginTop: 10 },
})
