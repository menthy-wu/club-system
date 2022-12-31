import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import WalletHeader from "./WalletScreen/WalletHeader";
import WalletBalance from "./WalletScreen/WalletBalance";
import WalletOptions from "./WalletScreen/WalletOptions";
import WalletAmountDue from "./WalletScreen/WalletAmountDue";
import WalletTransactions from "./WalletScreen/WalletTransactions";

const WalletScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <ScrollView>
      <View className="w-full flex-col flex justify-center items-center">
        <WalletHeader />
        <WalletBalance />
        <View className="h-8" />
        <WalletOptions />
        <View className="h-8" />
        <WalletAmountDue />
        <View className="h-8" />
        <WalletTransactions />
      </View>
    </ScrollView>
  );
};

export default WalletScreen;
