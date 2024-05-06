import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from './Config';


const LoginView = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const fachUserc = async () => {
    try {
      const temp = [];
      const data = await getDocs(collection(db, "users"));
      data.forEach(user => {
        temp.push(user.data());
      });
      setUser(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fachUserc();
  }, []);

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginPress = () => {
//test mode 
 //navigation.navigate('Home');
//test mode off 

    const filteredUsers = user.filter(item => item.email === formData.email);
    if (filteredUsers.length > 0) {
      const pass = user.filter(item => item.password === formData.password);
      if (pass.length > 0 ) {
        navigation.navigate('Home'); // Navigate to the home screen upon successful login
      } else {
        // Password not exists error
      }
    } else {
      // Email not exists error
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Smart Investment</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#595757"
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#595757"
          value={formData.password}
          onChangeText={text => handleChange('password', text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1B2732',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '90%',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00B386',
    borderRadius: 5,
    padding: 10,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
};

export default LoginView;
