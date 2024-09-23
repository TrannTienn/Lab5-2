import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Modal, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [userGuess, setUserGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const user = { name: 'TRẦN TIẾN' };

  const checkGuess = () => {
    const guess = parseInt(userGuess);
    if (guess === randomNumber) {
      setMessage('BẠN ĐÃ ĐOÁN ĐÚNG!');
    } else if (guess < randomNumber) {
      setMessage('Số bạn đoán quá thấp!');
    } else {
      setMessage('Số bạn đoán quá cao!');
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setMessage('');
  };

  const toggleUserModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ImageBackground 
      source={require('../assets/am.jpg')} // Đường dẫn đến hình ảnh
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.avatarContainer} onPress={toggleUserModal}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.userName}>{user.name}</Text>
        </View>

        <Text style={styles.title}>Trò Chơi Đoán Số</Text>
        <TextInput
          style={styles.input}
          color='#ffffff'
          placeholder="Nhập số từ 1 đến 100"
          placeholderTextColor="#ffffff" // Đặt màu chữ của placeholder
          keyboardType="numeric"
          value={userGuess}
          onChangeText={setUserGuess}
        />
        <Button title="Kiểm tra" onPress={checkGuess} color="#007bff"/>
        <Text style={styles.message}>{message}</Text>
        <Button title="Chơi lại" onPress={resetGame} color="#007bff" />

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Thông tin người dùng</Text>
              <Text>Tên: {user.name}</Text>
              <TouchableOpacity onPress={() => {
                setModalVisible(false);
                navigation.navigate('Login');
              }}>
                <Text style={styles.logoutText}>Đăng Xuất</Text>
              </TouchableOpacity>
              <Button title="Đóng" onPress={toggleUserModal} />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(24, 244, 244, 0.1)', // Độ trong suốt cho nền
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 10,
    width: '100%',
    marginBottom: 20,
    alignSelf: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#FF3333',
    textAlign: 'center',
    fontWeight: 'bold', // Thêm thuộc tính này để in đậm
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoutText: {
    color: '#db4437',
    marginVertical: 10,
    fontSize: 20,
  },
});

export default HomeScreen;
