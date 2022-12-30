import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-screen flex flex-col items-center justify-center">
      <Text className="font-poppin">Login</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
