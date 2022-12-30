import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import HomeClass from "./HomeClass";
import { classes } from "../data/classes";

const HomeClasses = () => {
  return (
    <View className="w-full flex flex-col items-center justify-center">
      <View className="w-11/12 flex flex-row justify-between items-center my-1">
        <Text className="text-lg" style={{ fontFamily: "Poppins_400Regular" }}>
          Classes in my club
        </Text>
        <Text className="text-theme2">
          <AntDesign name="arrowright" size={24} />
        </Text>
      </View>
      <ScrollView className="w-11/12" horizontal={true}>
        {classes.map((element, index) => {
          return (
            <HomeClass
              key={index}
              title={element.name}
              imageUrl={element.coverImg}
              description={element.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeClasses;
