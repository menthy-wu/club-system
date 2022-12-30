import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const WalletHeader = () => {
  return (
    <View className="bg-theme1 justify-center items-center h-[300px]">
      <View className="bg-topography w-full justify-center items-center h-[300px]">
        <View className="w-11/12 flex justify-end flex-row items-center -mt-16">
          <Text className="text-theme2 m-2">
            <Ionicons name="ios-settings" size={24} />
          </Text>
        </View>
        <Text
          className="text-white text-lg mb-2"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          Wallet
        </Text>
        <Image
          className="bg-[#dddddd] rounded-full"
          style={{ width: 60, height: 60 }}
          source={require("../../assets/profile.png")}
        />
      </View>
    </View>
  );
};

export default WalletHeader;
