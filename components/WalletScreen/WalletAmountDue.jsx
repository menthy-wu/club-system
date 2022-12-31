import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WalletAmountDue = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AmountDueDetail")}
      className="bg-white w-full flex flex-col items-center justify-center"
    >
      <Text
        className="text-base ml-10 w-full text-left my-2"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        Amount Due
      </Text>
      <View className="flex flex-row justify-between items-center w-11/12">
        <View>
          <Text
            className="text-sm ml-5"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Due 12.28.2022
          </Text>
          <Text
            className="text-base ml-5 text-theme2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            -$56.34
          </Text>
        </View>
        <Text className="text-theme1">
          <Ionicons name="ellipsis-horizontal-sharp" size={24} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WalletAmountDue;
