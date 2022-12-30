import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { student } from "../data/student";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const WalletBalance = () => {
  return (
    <View className="-mt-20 flex w-full justify-center items-center">
      <View className="w-10/12 flex flex-col bg-white rounded-3xl drop-shadow-lg">
        <View className="w-full flex flex-row justify-start items-center py-3">
          <Text className="text-theme1 ml-5 mr-3">
            <FontAwesome5 name="money-bill" size={24} />
          </Text>
          <View>
            <Text
              className="text-gray"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              my balance
            </Text>
            <View className="flex flex-row items-end">
              <Text
                className="text-xl text-gray mr-1"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                us
              </Text>
              <Text
                className="text-3xl"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                ${student.balance}
              </Text>
            </View>
          </View>
        </View>
        <View className= "w-11/12 flex-row justify-between items-end mb-2">
          <TouchableOpacity className="ml-8">
            <View className="flex flex-row bg-theme2 m-3 justify-center items-center rounded-full">
              <Text className="text-white pl-3 pr-1">
                <Octicons name="diff-added" size={20} />
              </Text>
              <Text
                className="text-white text-base pr-3 py-1"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Add
              </Text>
            </View>
          </TouchableOpacity>
          <View className="flex items-center justify-end flex-row">
            <Text
              className="text-theme2 text-sm"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              Account Detail
            </Text>
            <Text className="text-theme2">
              <AntDesign name="arrowright" size={24} />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletBalance;
