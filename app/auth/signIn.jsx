import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors.jsx';
import { useRouter } from "expo-router";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo_auth.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Добро пожаловать назад!</Text>

      <TextInput
        placeholder="Введите логин..."
        style={styles.textInput}
      />

      <TextInput
        placeholder="Введите пароль" secureTextEntry={true}
        style={styles.textInput}
      />

<TouchableOpacity style={styles.button}
      //onPress={() => router.push("./../auth/signUp")}
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
