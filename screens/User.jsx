import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../components/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WalletScreen from "../components/WalletScreen";
import CalanderScreen from "../components/CalanderScreen";
import ProfileScreen from "../components/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import LoginScreen from "./LoginScreen"

const Tab = createBottomTabNavigator();
const User = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "ios-wallet" : "ios-wallet-outline";
          } else if (route.name === "Calander") {
            iconName = focused ? "md-calendar" : "md-calendar-sharp";
          } else if (route.name === "Profile") {
            iconName = focused ? "user-alt" : "user";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#DE783F",
        tabBarInactiveTintColor: "#28304E",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Calander" component={CalanderScreen} />
      <Tab.Screen name="Profile" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default User;
