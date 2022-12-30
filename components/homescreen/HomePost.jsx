import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomePost = ({ poster, time, title, body }) => {
  return (
    <View className="flex flex-col w-11/12 m-5">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center ">
          <Image
            className="bg-[#dddddd] rounded-full"
            style={{ width: 50, height: 50 }}
            source={require("../../assets/profile.png")}
          />
          <View className="ml-4">
            <Text
              className="text-lg mt-2"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              {poster}
            </Text>
            <Text
              className="mt-0 pt-0 text-xs text-gray"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              {time}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-theme1">
            <Ionicons name="ellipsis-horizontal-sharp" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        className="ml-7 text-2xl mt-3"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        {title}
      </Text>
      <Text
        className="ml-7 text-base mt-3 mb-6 text-gray"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        {body}
      </Text>
      <View className = "w-full bg-theme1 h-[1px]"/>
    </View>
  );
};

export default HomePost;
