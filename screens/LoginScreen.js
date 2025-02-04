import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
