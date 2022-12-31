import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { student } from "../data/student";
import { TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native";

const WalletBalance = () => {
  const navigation = useNavigation();
  return (
    <View className="-mt-20 flex w-full justify-center items-center">
      <TouchableHighlight
        underlayColor="#dddddd"
        onPress={() => navigation.navigate("AccountBalanceDetail")}
        className="w-10/12  bg-white rounded-3xl drop-shadow-lg"
      >
        <View className="w-full flex flex-col rounded-3xl drop-shadow-lg">
          <View className="w-full flex flex-row justify-start items-center py-3">
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
          <View className="w-11/12 flex-row justify-between items-end mb-2">
            <TouchableOpacity
              className="ml-8"
              onPress={() => navigation.navigate("AddMoney")}
            >
              <View className="flex flex-row bg-theme2 mx-3 justify-center items-center rounded-full">
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
      </TouchableHighlight>
    </View>
  );
};

export default WalletBalance;
