import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors  from "../../constant/Colors.jsx";

export default function Chat(){
return(
<View>
<Text style={{
 marginTop:50,
 fontSize: 30,
 fontWeight: "bold",
 textAlign: "left",
 marginLeft: 10
}}>Чаты</Text>

<View style={styles.button}>
  <Image
    source={require('../../assets/images/user_profile.png')}
    style={styles.avatar}
  />
  <Text style={styles.name}>Петр Петров</Text>
</View>


<View style={styles.button}>
  <Image
    source={require('../../assets/images/chats_prphoto1.png')}
    style={styles.avatar}
  />
  <Text style={styles.name}>Мари Люксенбург</Text>
</View>

<View style={styles.button}>
  <Image
    source={require('../../assets/images/chats_prphoto2.png')}
    style={styles.avatar}
  />
  <Text style={styles.name}>Дина Ли</Text>
</View>



</View>




)
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.LIGHTV,
      marginTop: 30,
      borderRadius: 10,
      marginHorizontal: 10,
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.WHITE,
      marginLeft: 15, 
    },
  });
  