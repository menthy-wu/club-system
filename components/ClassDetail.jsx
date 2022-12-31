import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ClassDetail = (title, time) => {
  const {
    params: { course },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      presentation: "modal",
      headerShown: false,
    });
  }, []);
  return (
    <View className="w-full flex justify-center items-center">
      <ImageBackground
        source={course.coverImg}
        className="w-full h-[200px] flex justify-center items-start"
      >
        <SafeAreaView className="w-full h-[200px] flex justify-start items-center">
          <TouchableOpacity
            className="w-11/12"
            onPress={() => navigation.goBack(null)}
          >
            <Text className="text-theme2">
              <AntDesign name="arrowleft" size={30} />
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      <View className="w-11/12 flex flex-col mt-2">
        <Text className="text-lg" style={{ fontFamily: "Poppins_700Bold" }}>
          {course.name}
        </Text>
        <Text
          className="text-xs text-gray my-2"
          style={{ fontFamily: "Poppins_300Light" }}
        >
          {course.description}
        </Text>
        <View className="flex flex-row justify-start items-center">
          <Text
            className="text-sm"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            class size:
          </Text>
          <Text
            className="text-sm ml-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {course.size}
          </Text>
        </View>
        <View className="flex flex-row justify-start items-center">
          <Text
            className="text-sm"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            coach:
          </Text>
          <Text
            className="text-sm ml-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {course.coach}
          </Text>
        </View>
        <View className="flex flex-row justify-start items-center">
          <Text
            className="text-sm"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            time:
          </Text>
          <Text
            className="text-sm ml-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {course.time}
          </Text>
        </View>
        <View className="flex flex-row justify-start items-center">
          <Text
            className="text-sm"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            day
          </Text>
          <Text
            className="text-sm ml-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {course.day}
          </Text>
        </View>
        <View className="flex flex-row justify-start items-center">
          <Text
            className="text-sm"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            during:
          </Text>
          <Text
            className="text-sm ml-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {course.during}
          </Text>
        </View>
        <View className="flex flex-row justify-start items-center">
          <Text
            className="text-sm"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            level:
          </Text>
          <Text
            className="text-sm ml-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {course.level}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ClassDetail;
