import { View, Text } from "react-native";
import React from "react";

const WalletTransaction = ({ title, time, amount, color }) => {
  return (
    <View className="bg-white w-full flex-col flex items-center justify-center">
      <View className="w-10/12 flex-row flex items-center justify-between">
        <View className="-full flex-col flex">
          <Text
            className="text-lg mt-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {title}
          </Text>
          <Text
            className="text-sm mb-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {time}
          </Text>
        </View>
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className={`text-${color} text-lg`}
        >
          {amount}
        </Text>
      </View>
      <View className="w-full bg-theme1 h-[1px]" />
    </View>
  );
};

export default WalletTransaction;
