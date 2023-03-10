import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { student } from "../data/student";
import { TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeBalance = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AccountBalanceDetail")}
      className="bg-white drop-shadow-xl w-10/12 flex flex-row rounded-2xl justify-between items-center"
    >
      <View className="flex flex-row justify-center items-center py-3">
        <Text className="text-theme1 ml-5 mr-3">
          <FontAwesome5 name="money-bill" size={24} />
        </Text>
        <View>
          <Text
            className="text-gray text-xs"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            my balance
          </Text>
          <View className="flex flex-row items-end">
            <Text
              className="text-base text-gray mr-1"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              us
            </Text>
            <Text
              className="text-xl"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              ${student.balance}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AddMoney")}>
        <View className="flex flex-row bg-theme2 m-3 justify-center items-center rounded-full">
          <Text className="text-white pl-3 pr-1">
            <Octicons name="diff-added" size={18} />
          </Text>
          <Text
            className="text-white text-sm pr-3 py-1"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Add
          </Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HomeBalance;
