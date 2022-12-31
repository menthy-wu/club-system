import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WalletOption = ({ title, img, nav}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="flex flex-col mr-3 w-[150px] drop-shadow-lg"
      onPress={() => navigation.navigate(nav)}
    >
      <View className="bg-theme2 h-[60px] rounded-t-2xl">
        <Image
          className="justify-center items-center h-full w-full rounded-t-2xl"
          source={img}
          resizeMode="repeat"
        />
      </View>
      <View className="bg-white rounded-b-2xl flex flex-row items-center justify-center w-full h-[40px]">
        <Text className="text-theme1 w-3/12 flex items-center justify-center text-center">
          <MaterialIcons name="payments" size={24} />
        </Text>
        <View className="w-8/12 flex items-center justify-center">
          <Text
            className="text-xs text-left"
            style={{ fontFamily: "Poppins_700Bold" }}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WalletOption;
