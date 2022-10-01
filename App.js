import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/Home";
import SettingScreen from "./Screens/SettinScreen";
import ContactScreen from "./Screens/ContactScreen";
import ShoppinScreen from "./Screens/ShoppinScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'orange',
          tabBarActiveBackgroundColor: 'lightgrey'
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={"lightblue"} size={20} />
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: "Configuración",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="construct-outline"
                color={"red"}
                size={20}
              ></Ionicons>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            title: "Contacto",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="people-circle-outline"
                color={"lightseagreen"}
                size={20}
              ></Ionicons>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Shoppin"
          component={ShoppinScreen}
          options={{
            title: "Tienda",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="cart-outline"
                color={"orange"}
                size={20}
              ></Ionicons>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
