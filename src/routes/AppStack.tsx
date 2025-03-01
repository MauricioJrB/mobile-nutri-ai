import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppStackParamList } from "../types/RootStackParamList";

import Home from "../screens/Home";

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
