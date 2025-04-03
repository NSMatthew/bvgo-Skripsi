import { View } from "react-native";
import { Link } from "expo-router";
import { Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { Text } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn } from "@clerk/clerk-expo";
import { SignedOut } from "@clerk/clerk-expo";

export default function Index() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Redirect href={"/Home"} />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
