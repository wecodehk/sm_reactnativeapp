import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import img from '../../assets/big.jpg'


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainScreen');
        }, 2000); 
    }, []);

    return (
        <View style={styles.container}>
            <Image source={img}  style={styles.image}
/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Replace with your desired background color
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default SplashScreen;
