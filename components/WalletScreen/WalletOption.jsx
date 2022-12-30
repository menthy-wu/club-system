import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const WalletOption = ({ title,img }) => {
  return (
    <TouchableOpacity className="flex flex-col mr-3 w-[200px]">
      <View className="bg-theme2 h-[100px] rounded-t-3xl">
        <Image
          className="justify-center items-center h-full w-full rounded-t-3xl"
          source={img}
          resizeMode="repeat"
        />
      </View>
      <View className="bg-white rounded-b-3xl flex flex-row items-center justify-center w-full">
        <Text className="text-theme2 mr-1 ml-3">
          <MaterialIcons name="payments" size={24} color="black" />
        </Text>
        <Text
          className="ml-1 mr-3 mt-2 text-base mb-2"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WalletOption;
