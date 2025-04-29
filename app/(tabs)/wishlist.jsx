import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors  from "../../constant/Colors.jsx";

export default function Home(){
return(
<View>
<TouchableOpacity style={{

    backgroundColor: Colors.WHITE,
    borderWidth: 5,
    borderColor: Colors.VIOL,
    borderRadius: 25,
    left: 10,
    top:10,
    width:140,
    height: 40
  
}}>
<Text style = {[styles.buttonText]}>Сравнить</Text>
</TouchableOpacity>



</View>




)
}
const styles = StyleSheet.create({
button:{
  padding: 15,
  backgroundColor: Colors.WHITE,
  marginTop: 30,
  borderRadius: 10,
  right: 30
},
buttonText:{
 textAlign: 'center',
 fontSize: 20,
 fontWeight: 'bold',
 color: Colors.VIOL,
}
})
