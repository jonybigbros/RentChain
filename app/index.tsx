import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors  from "./../constant/Colors.jsx";
import { useRouter } from "expo-router";
//import { useNavigation } from "expo-router";
export default function Index() {

    const router=useRouter();
    //const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
      <Image source={require('./../assets/images/logo_loading.png')}
      style={{
        position: 'absolute', 
        top: 180,  
        left: 130,  
        height: 135,
        width: 149
      

      }}
      />

    <View style={{
    padding:25,
    backgroundColor: Colors.LIGHTV,
    height: '100%',
    borderRadius: 40,
    marginTop: 450

    }}>
      <Text style={{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.WHITE
      }}>Добро пожаловать в RentChain!</Text>

    <Text style={{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    color: Colors.BLACK,
    marginTop: 20
 }}>Ваш умный помощник по аренде жилья со смарт контрактами 📝 </Text>

    <TouchableOpacity style={styles.button}
      onPress={() => router.push("./../auth/signUp")}
    >
      <Text style={[styles.buttonText,{color: Colors.LIGHTV}]}>Начать</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={[styles.button,{
        backgroundColor: Colors.LIGHTV,
        borderWidth: 1,
        borderColor: Colors.WHITE
      }]}
      onPress={() => router.push("./../auth/signIn")}
      >
      <Text style={[styles.buttonText,{color: Colors.WHITE}]}>Уже есть аккаунт?</Text>
      </TouchableOpacity>
 
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
button:{
  padding: 15,
  backgroundColor: Colors.WHITE,
  marginTop: 30,
  borderRadius: 10
},
buttonText:{
 textAlign: 'center',
 fontSize: 18
}
})

