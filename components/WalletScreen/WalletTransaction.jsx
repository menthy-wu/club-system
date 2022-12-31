import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WalletTransaction = ({ title, time, amount, color }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TransactionDetail")}
      className="bg-white w-full flex-col flex items-center justify-center"
    >
      <View className="w-10/12 flex-row flex items-center justify-between">
        <View className="-full flex-col flex">
          <Text
            className="text-base mt-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {title}
          </Text>
          <Text
            className="text-xs mb-2"
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
    </TouchableOpacity>
  );
};

export default WalletTransaction;
