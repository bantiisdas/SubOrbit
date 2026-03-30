import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1  bg-background p-5">
      <Text className="text-5xl font-sans-extrabold ">Home</Text>

      <Link href="/(auth)/Sign-In">Sign In</Link>
      <Link href="/(auth)/Sign-Up">Sign In</Link>
    </SafeAreaView>
  );
}
