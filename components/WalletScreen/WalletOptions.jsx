import { View, Text, ScrollView } from "react-native";
import React from "react";
import WalletOption from "./WalletOption";

const WalletOptions = () => {
  return (
    <ScrollView className="w-11/12" horizontal={true}>
      <WalletOption
        nav="MakeAPayment"
        title="make a payment"
        img={require("../../assets/formal-invitation.png")}
      />
      <WalletOption
        nav="PaymentMethod"
        title="payment method"
        img={require("../../assets/jupiter.png")}
      />
      <WalletOption
        nav="WithDraw"
        title="withdraw money"
        img={require("../../assets/cutout.png")}
      />
      <WalletOption
        nav="PaymentPlan"
        title="payment plan"
        img={require("../../assets/formal-invitation.png")}
      />
    </ScrollView>
  );
};

export default WalletOptions;
