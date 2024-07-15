import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const RegistrationPage = ({navigation}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const apiUrl = 'http://192.168.1.33:3000/users/register';

    try {
      const response = await axios.post(apiUrl, formData);
      console.log('User registered:', response.data);
      Alert.alert('Success', 'User registered successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', 'Failed to register user. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#666"
        value={formData.firstName}
        onChangeText={(value) => handleChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#666"
        value={formData.lastName}
        onChangeText={(value) => handleChange('lastName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#666"
        value={formData.mobileNumber}
        onChangeText={(value) => handleChange('mobileNumber', value)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.socialLogin}>
        <Text style={styles.socialText}>Or login with:</Text>
        <TouchableOpacity style={styles.socialButton} >
          <Text style={styles.socialButtonText}>Login by Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} >
          <Text style={styles.socialButtonText}>Login by Facebook</Text>
        </TouchableOpacity>
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  button: {
    height: 48,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLogin: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  socialButton: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#ddd',
  },
  socialButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appleButton: {
    width: '100%',
    height: 48,
    marginTop: 10,
  },
});


export default RegistrationPage;
