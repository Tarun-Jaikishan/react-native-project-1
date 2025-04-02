import { useEffect, useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import * as Notifications from "expo-notifications";

const DummyPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted")
        alert("You need to enable notifications for this feature!");
    };

    requestPermissions();
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Pressable
        onPress={() => setIsModalVisible(true)}
        className="bg-blue-900 px-10 py-2 rounded"
      >
        <Text className="text-white">Click Me</Text>
      </Pressable>

      <Pressable
        onPress={async () => {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Hello! 👋",
              body: "This is a push notification from your app!",
            },
            trigger: null,
          });
          console.log("s");
        }}
        className="mt-5 bg-blue-900 px-10 py-2 rounded"
      >
        <Text className="text-white">Notify</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-lg w-80">
            <Text className="text-lg mb-4">Hi!</Text>
            <Pressable
              onPress={() => setIsModalVisible(false)}
              className="bg-blue-900 px-6 py-2 rounded self-end"
            >
              <Text className="text-white">Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DummyPage;
