import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/homescreen/HomeHeader";
import HomeBalance from "../components/homescreen/HomeBalance";
import HomeClasses from "../components/homescreen/HomeClasses";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="flex flex-col w-full items-center justify-center">
      <HomeHeader />
      <HomeBalance />
      <HomeClasses />
    </SafeAreaView>
  );
};

export default HomeScreen;
