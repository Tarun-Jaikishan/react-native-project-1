import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const ProfilePage = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>ProfilePage</Text>
      <Link
        href={"/(others)/dummy"}
        className="mt-5 bg-gray-400 p-[1rem] rounded-full"
      >
        <View className="flex-row items-center">
          <Text className="text-white font-bold mr-2">Move to Dummy Page</Text>
          <Ionicons name="arrow-forward" size={20} color={"white"} />
        </View>
      </Link>
    </View>
  );
};

export default ProfilePage;
