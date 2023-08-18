import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {SignOut} from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {

  const handleLogout = async() => {
    await SignOut();
  }
  return ( 
    <SafeAreaView className='flex-1 flex-row justify-center items-center'>
      <Text className="text-lg">Home Screen</Text>
      <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}