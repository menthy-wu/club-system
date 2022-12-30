import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeClass = ({ title, imageUrl, description }) => {
  return (
    <TouchableOpacity className="flex flex-col mr-3">
      <Image source={imageUrl} style={{ width: 200, height: 100 }} />
      <View className="bg-white">
        <Text className="ml-3 mt-2 text-base" style={{ fontFamily: "Poppins_700Bold" }}>{title}</Text>
        <View className="ml-3 flex flex-row items-center justify-start mb-3">
          <Text className="text-theme2 mr-2">
            <AntDesign name="arrowright" size={19} />
          </Text>
          <Text>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeClass;
