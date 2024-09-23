// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen'; // Thêm màn hình đăng nhập
import SignupScreen from './screen/SignupScreen'; // Thêm màn hình đăng ký
import HomeScreen from './screen/HomeScreen'; // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Đăng Nhập' }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ title: 'Đăng Ký' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Trang Chủ' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
