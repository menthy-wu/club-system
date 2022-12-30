import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-screen flex flex-col items-center justify-center">
      <Text
        className="font-poppin text-3xl m-4 text-theme1"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        Login
      </Text>
      <View className="w-7/12 my-1">
        <Text
          className="font-poppin text-sm text-gray ml-4"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Email or ID
        </Text>
        <TextInput
          className="border-[1px] border-gray rounded-full p-2"
          placeholder="email"
          style={{ fontFamily: "Poppins_400Regular" }}
        ></TextInput>
      </View>
      <View className="w-7/12 my-1">
        <Text
          className="font-poppin text-sm text-gray ml-4"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Password
        </Text>
        <TextInput
          className="border-[1px] border-gray rounded-full p-2"
          placeholder="password"
          style={{ fontFamily: "Poppins_400Regular" }}
        ></TextInput>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => console.log("Pressed!")}
        >
          <Text
            className="font-poppin text-xs text-gray w-full text-right pr-3"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            forget my password
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="w-7/12 mt-5">
        <Text
          className="w-full text-center rounded-full p-2 text-2xl bg-theme1 text-white"
          style={{ fontFamily: "Poppins_400Regular" }}
          onPress={() => navigation.navigate("Home")}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-7/12 mt-2">
        <Text
          className="w-full text-center rounded-full p-2 text-xl bg-white text-gray border-[1px] border-gray"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-7/12 mt-2 bg-white border-[1px] border-gray rounded-full flex justify-center items-center flex-row">
        <Text className="text-theme1">
          <FontAwesome name="wechat" size={24} />
        </Text>
        <Text
          className="text-center ml-2 py-2 text-xl text-gray"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Wechat Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-7/12 mt-2 bg-white border-[1px] border-gray rounded-full flex justify-center items-center flex-row">
        <Text className="text-theme1">
          <FontAwesome name="google" size={24} />
        </Text>
        <Text
          className="text-center ml-2 py-2 text-xl text-gray"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Google Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
