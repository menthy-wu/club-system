import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "./homescreen/HomeHeader";
import HomeBalance from "./homescreen/HomeBalance";
import HomeClasses from "./homescreen/HomeClasses";
import HomePosts from "./homescreen/HomePosts";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="flex flex-col w-full items-center justify-center">
      <ScrollView className="flex flex-col w-full">
        <View className="flex flex-col w-full items-center justify-center">
          <HomeHeader />
          <View className="h-8" />
          <HomeBalance />
          <View className="h-8" />
          <HomeClasses />
          <View className="h-8" />
          <HomePosts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
