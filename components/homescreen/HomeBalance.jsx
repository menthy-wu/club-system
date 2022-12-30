import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { student } from "../data/student";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";

const HomeBalance = () => {
  return (
    <View className="bg-white drop-shadow-xl w-10/12 flex flex-row rounded-2xl justify-between items-center">
      <View className="flex flex-row justify-center items-center py-3">
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
      <TouchableOpacity>
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
    </View>
  );
};

export default HomeBalance;
