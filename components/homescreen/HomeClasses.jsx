import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import HomeClass from "./HomeClass";
import { classes } from "../data/classes";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeClasses = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex flex-col items-center justify-center">
      <View className="w-11/12 flex flex-row justify-between items-center my-1">
        <Text
          className="text-base"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Classes in my club
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllClasses")}>
          <Text className="text-theme2">
            <AntDesign name="arrowright" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="w-11/12" horizontal={true}>
        {classes.map((course, index) => {
          return <HomeClass key={index} course={course} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HomeClasses;
