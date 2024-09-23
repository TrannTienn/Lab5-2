// screen/LogoutScreen.js
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useAuth } from '../context/AuthContext';

const LogoutScreen = ({ navigation }) => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      Alert.alert('Đăng xuất thành công!');
      navigation.navigate('LoginScreen'); // Chuyển hướng về màn hình đăng nhập
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <Text>Chào mừng, {user ? user.email : 'Người dùng'}</Text>
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

export default LogoutScreen;
