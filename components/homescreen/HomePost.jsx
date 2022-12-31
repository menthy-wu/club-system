import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePost = ({ poster, time, title, body }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="flex flex-col w-11/12 m-5"
      onPress={() => navigation.navigate("PostDetail")}
    >
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center ">
            <Image
              className="bg-[#dddddd] rounded-full"
              style={{ width: 30, height: 30 }}
              source={require("../../assets/profile.png")}
            />
            <View className="ml-4">
              <Text
                className="text-base mt-2"
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
          className="ml-7 text-lg mt-3"
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          {title}
        </Text>
        <Text
          className="ml-7 text-xs mb-6 text-gray"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          {body}
        </Text>
        <View className="w-full bg-theme1 h-[1px]" />
    </TouchableOpacity>
  );
};

export default HomePost;
