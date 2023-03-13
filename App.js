import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
const Stack = createNativeStackNavigator()

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyleStyle: { color: "white" },
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          options={{ headerBackTitleVisible: true }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
