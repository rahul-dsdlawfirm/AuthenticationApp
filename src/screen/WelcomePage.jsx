import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomePage = ({ route, navigation }) => {
  const { user } = route.params;
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? 'Good Morning'
      : currentHour < 18
      ? 'Good Afternoon'
      : 'Good Evening';

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{`${greeting}, ${user.firstName} ${user.lastName}`}</Text>
      <Button title="Logout" onPress={handleLogout} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
});

export default WelcomePage;

