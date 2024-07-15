import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './src/screen/RegistrationPage';
import LoginPage from './src/screen/LoginPage';
import WelcomePage from './src/screen/WelcomePage';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Register" component={RegistrationPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Welcome" component={WelcomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;


