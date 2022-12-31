// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "./components/HomeScreen";
import WalletScreen from "./components/WalletScreen";
import CalanderScreen from "./components/CalanderScreen";
import ProfileScreen from "./components/ProfileScreen";
import ClassDetail from "./components/ClassDetail";
import AllClasses from "./components/AllClasses";
import PostDetail from "./components/PostDetail";
import AccountBalanceDetail from "./components/AccountBalanceDetail";
import AddMoney from "./components/AddMoney";
import AmountDueDetail from "./components/AmountDueDetail";
import Setting from "./components/Setting";
import MakeAPayment from "./components/MakeAPayment";
import PaymentMethod from "./components/PaymentMethod";
import WithDraw from "./components/WithDraw";
import PaymentPlan from "./components/PaymentPlan";
import TransactionDetail from "./components/TransactionDetail";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ClassDetail" component={ClassDetail} />
      <HomeStack.Screen name="AllClasses" component={AllClasses} />
      <HomeStack.Screen name="PostDetail" component={PostDetail} />
      <HomeStack.Screen name="AddMoney" component={AddMoney} />
      <HomeStack.Screen name="Setting" component={Setting} />
      <HomeStack.Screen
        name="AccountBalanceDetail"
        component={AccountBalanceDetail}
      />
    </HomeStack.Navigator>
  );
};
const WalletStack = createNativeStackNavigator();
const WalletStackScreen = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name="Wallet" component={WalletScreen} />
      <WalletStack.Screen name="AddMoney" component={AddMoney} />
      <WalletStack.Screen name="Setting" component={Setting} />
      <WalletStack.Screen name="MakeAPayment" component={MakeAPayment} />
      <WalletStack.Screen name="PaymentMethod" component={PaymentMethod} />
      <WalletStack.Screen name="WithDraw" component={WithDraw} />
      <WalletStack.Screen name="PaymentPlan" component={PaymentPlan} />
      <WalletStack.Screen name="AmountDueDetail" component={AmountDueDetail} />
      <WalletStack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
      />

      <WalletStack.Screen
        name="AccountBalanceDetail"
        component={AccountBalanceDetail}
      />
    </WalletStack.Navigator>
  );
};
const CalanderStact = createNativeStackNavigator();
const CalanderStackScreen = () => {
  return (
    <CalanderStact.Navigator>
      <CalanderStact.Screen name="Calander" component={CalanderScreen} />
    </CalanderStact.Navigator>
  );
};
const ProfileStact = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStact.Navigator>
      <ProfileStact.Screen name="Profile" component={ProfileScreen} />
    </ProfileStact.Navigator>
  );
};
const Tab = createBottomTabNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Wallet") {
                iconName = focused ? "ios-wallet" : "ios-wallet-outline";
              } else if (route.name === "Calander") {
                iconName = focused ? "md-calendar" : "md-calendar-sharp";
              } else if (route.name === "Profile") {
                iconName = focused ? "user-alt" : "user";
                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#DE783F",
            tabBarInactiveTintColor: "#28304E",
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Wallet"
            component={WalletStackScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Calander"
            component={CalanderStackScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
