import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Announcements from './src/components/Announcements';
import Holiday from './src/components/Holiday';
import Home from './src/components/Home';
import MainScreen from './src/components/Loginsreen';
import SplashScreen from './src/components/SplashScreen';
import Ipo from './src/components/ipo';
import Boardmeetings from './src/components/boardmeetings'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerMode: 'none' // Move headerMode to screenOptions
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="ipo" component={Ipo} />
                <Stack.Screen name="Holiday" component={Holiday} />
                <Stack.Screen name="Announcements" component={Announcements} />
                <Stack.Screen name="Boardmeetings" component={Boardmeetings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
