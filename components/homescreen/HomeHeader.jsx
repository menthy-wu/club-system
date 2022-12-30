import { View, Text, Image } from "react-native";
import React from "react";
import { student } from "../data/student";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View className="w-11/12 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <Image
          className="bg-[#dddddd] rounded-full"
          style={{ width: 40, height: 40 }}
          source={require("../../assets/profile.png")}
        />
        <Text
          className="mx-4 text-base text-theme1"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          {student.club}
        </Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="text-theme2 m-2">
          <Ionicons name="ios-settings" size={24} />
        </Text>
        <Text className="text-theme1">
          <Ionicons name="ellipsis-horizontal-sharp" size={24} />
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
