import { View, Text, ScrollView } from "react-native";
import React from "react";
import WalletOption from "./WalletOption";

const WalletOptions = () => {
  return (
    <ScrollView className="w-11/12" horizontal={true}>
      <WalletOption
        title="make a payment"
        img={require("../../assets/formal-invitation.png")}
      />
      <WalletOption
        title="payment method"
        img={require("../../assets/jupiter.png")}
      />
      <WalletOption
        title="withdraw money"
        img={require("../../assets/cutout.png")}
      />
      <WalletOption
        title="payment plan"
        img={require("../../assets/formal-invitation.png")}
      />
    </ScrollView>
  );
};

export default WalletOptions;
