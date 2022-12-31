import { View, Text } from "react-native";
import React from "react";
import { transactions } from "../data/transactions";
import WalletTransaction from "./WalletTransaction";
import { Ionicons } from "@expo/vector-icons";

const WalletTransactions = () => {
  return (
    <View className="bg-white w-full flex flex-col items-center justify-center">
      <View className="w-10/12 flex flex-row items-center justify-between">
        <View className="">
          <Text
            className="text-xl w-full text-left mt-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Transactions
          </Text>
          <Text
            className="text-xs text-gray w-full text-left mb-2"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            your payment history
          </Text>
        </View>
        <Text className="text-theme1">
          <Ionicons name="ellipsis-horizontal-sharp" size={24} />
        </Text>
      </View>
      {transactions.map((transaction, index) => {
        return (
          <WalletTransaction
            title={transaction.title}
            time={transaction.time}
            amount={transaction.amount}
            color={transaction.color}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default WalletTransactions;
