// screen/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { auth } from '../context/firebaseConfig';
import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorMessage = error.code === 'auth/wrong-password' ? "Sai mật khẩu" : error.message;
        Alert.alert("Đăng nhập thất bại", errorMessage);
      });
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const authInstance = getAuth();

    try {
      await signInWithPopup(authInstance, provider);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Đăng nhập thất bại", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/loa.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>MIND MASTERS</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Text style={styles.googleButtonText}>Đăng Nhập bằng Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Signup')}
          style={styles.registerButton}
        >
          <Text style={styles.registerText}>Chưa có tài khoản? Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 2,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    elevation: 5,
    width: '85%',
    
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007bff',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 2,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 2,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 20,
    padding: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#db4437',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default LoginScreen;
