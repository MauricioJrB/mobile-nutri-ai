import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/RootStackParamList";

import Login from "../screens/Login";
import Initial from "../screens/Initial";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
