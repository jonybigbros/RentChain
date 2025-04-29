import {View,Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors  from "../../constant/Colors.jsx";

export default function Home(){
return(
<View>
<View style={{




}}>
<Text style = {[styles.buttonText]}>Сравнить</Text>
</View>



</View>




)
}
const styles = StyleSheet.create({
button:{
  padding: 15,
  backgroundColor: Colors.WHITE,
  marginTop: 30,
  borderRadius: 10
},
buttonText:{
 textAlign: 'left',
 fontSize: 18,
 color: Colors.VIOL,
}
})
