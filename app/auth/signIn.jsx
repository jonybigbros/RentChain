import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors.jsx';
import { useRouter } from "expo-router";
import { useState } from 'react';
import { Alert } from 'react-native';
import { auth, firestore, storage, messaging} from './firebaseConfig';
// { getFirestore, doc, setDoc } from 'firebase/firestore';


export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        router.push("/(tabs)/find");
      } catch (error){
        console.error;
        Alert.alert('Вышла ошибка', "Неверная почта или пароль:/")
      }
    };
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo_auth.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Добро пожаловать назад!</Text>

      <TextInput
        placeholder="Введите почту..."
        style={styles.textInput}
        value={email}
        OnChange={setEmail}
      />

      <TextInput
        placeholder="Введите пароль" secureTextEntry={true}
        style={styles.textInput}
        value={password}
        onChange={setPassword}
      />

<TouchableOpacity style={styles.button}
      onPress={SignIn}
    >
      <Text style={[styles.buttonText,{color: Colors.WHITE}]}>Войти</Text>
      </TouchableOpacity>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: 79,
    left: 120,
    height: 97,
    width: 149,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 180, 
    color: Colors.LIGHTV,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.LIGHTV,
    width: '100%',
    padding: 10,
    fontSize: 13,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  button:{
      padding: 15,
      backgroundColor: Colors.LIGHTV,
      marginTop: 25,
      borderRadius: 30,
      width: 200,
      height: 57,
      marginLeft: 80,
    },
    buttonText:{
     textAlign: 'center',
     fontSize: 18
    }
});
