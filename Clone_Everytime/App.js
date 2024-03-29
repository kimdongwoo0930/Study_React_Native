import { StyleSheet, Text, View } from "react-native";
import Login from "./Login/Login";
import Register from "./Login/Register";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"register"} component={Register} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
