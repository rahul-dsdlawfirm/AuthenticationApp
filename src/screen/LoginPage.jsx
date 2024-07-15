import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginPage = ({ navigation }) => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
       
        try {
            const response = await axios.post('http://192.168.1.33:3000/login', formData);
            if (response.data.success) {
                navigation.navigate('Welcome', { user: response.data.user });
                console.log(response.data)
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('Login failed.');
        }
    };

    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Login</Text>
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
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {message && <Text style={styles.message}>{message}</Text>}
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      message: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
      },
    });
    

export default LoginPage;
