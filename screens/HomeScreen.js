import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SignOut } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../config/firebase";
export default function HomeScreen() {
  const handleLogout = async () => {
    await SignOut(auth);
  };
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center">
      <Text className="text-lg">Home Screen</Text>
      <TouchableOpacity
        className="p-1 bg-red-400 rounded-lg"
        onPress={handleLogout}
      >
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
