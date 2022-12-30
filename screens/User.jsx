import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../components/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WalletScreen from "../components/WalletScreen";
import BalanceScreen from "../components/BalanceScreen";
import ProfileScreen from "../components/ProfileScreen";

const Tab = createBottomTabNavigator();
const User = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Balance" component={BalanceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default User;
