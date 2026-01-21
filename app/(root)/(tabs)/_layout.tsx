import { Stack, Tabs } from "expo-router";
import { View, Image, ImageSourcePropType } from "react-native";
import { icons } from "@/constants";

export default function Layout() {
  const TabIcon = ({
    focused,
    source,
  }: {
    focused: boolean;
    source: ImageSourcePropType;
  }) => (
    <View
      className={`flex flex-row justify-center items-center rounded-full  ${focused ? "bg-general-300" : ""}`}
    >
      <View
        className={`rounded-full w-12 h-12  items-center justify-center ${focused ? "bg-general-400" : ""} `}
      >
        <Image
          source={source}
          resizeMode="contain"
          style={{ tintColor: "white" }}
          className="w-7 h-7"
        />
      </View>
    </View>
  );
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          overflow: "hidden",
          paddingBottom: 30,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
}
