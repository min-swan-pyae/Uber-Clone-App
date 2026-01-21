import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    // Wait for Clerk to load the session before redirecting
    return (
      <View>
        <View className="flex flex-row justify-center items-center mx-auto w-full h-full">
          <ActivityIndicator size="large" color="black" />
          <Text className="text-2xl font-JakartaExtraBold">
            Loading data...
          </Text>
        </View>
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
}
