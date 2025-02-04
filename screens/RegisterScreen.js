import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>Register Screen</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Register" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
