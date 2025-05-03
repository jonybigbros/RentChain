import {View,Text,StyleSheet, Image,boxShadow} from 'react-native'
import React from 'react'
import Colors  from "../../constant/Colors.jsx";

export default function Profile(){
return(
   <View> 
   
     <View style={styles.button} > 
        <Image source={require('../../assets/images/user_profile.png')}
      style={{
        position: 'absolute',  
        left: 10,
        top: 30,
        right: 10,
        width: 45,
        height: 45
      }}
      />
       <Text style={[styles.Text,{color: Colors.WHITE}]}>Петр Петров</Text>
       <Text style={[styles.TextStatus,{color: Colors.WHITE}]}>Арендую</Text>
       </View>
      
       <View> 
        <Image source={require('../../assets/images/profile_card.png')}
      style={styles.iconsinprofile}
      /> 
       <Image source={require('../../assets/images/profile_arrow.png')}
      style={[styles.iconsinprofile,{left: 360},{width:35},{height:35}]}
      /> 
      <Text style={[styles.Text,{color: Colors.LIGHTV}, {marginTop: 55}, {marginLeft: 10},{fontSize: 20}]}> Моя карта</Text>
      <View style={styles.stick}></View>
       </View>

       <View> 
        <Image source={require('../../assets/images/profile_settings.png')}
      style={styles.iconsinprofile}
      /> 
       <Image source={require('../../assets/images/profile_arrow.png')}
      style={[styles.iconsinprofile,{left: 360},{width:35},{height:35}]}
      /> 
      <Text style={[styles.Text,{color: Colors.LIGHTV}, {marginTop: 55}, {marginLeft: 10},{fontSize: 20}]}>Настройки</Text>
      <View style={styles.stick}></View>
       </View>

       <View> 
        <Image source={require('../../assets/images/profile_agreement.png')}
      style={styles.iconsinprofile}
      /> 
       <Image source={require('../../assets/images/profile_arrow.png')}
      style={[styles.iconsinprofile,{left: 360},{width:35},{height:35}]}
      /> 
      <Text style={[styles.Text,{color: Colors.LIGHTV}, {marginTop: 55}, {marginLeft: 10},{fontSize: 20}]}>Договор соглашения</Text>
      <View style={styles.stick}></View>
       </View>
       

       <View> 
        <Image source={require('../../assets/images/profile_exit.png')}
      style={styles.iconsinprofile}
      /> 
       <Image source={require('../../assets/images/profile_arrow.png')}
      style={[styles.iconsinprofile,{left: 360},{width:35},{height:35}]}
      /> 
      <Text style={[styles.Text,{color: Colors.LIGHTV}, {marginTop: 55}, {marginLeft: 10},{fontSize: 20}]}>Выйти из аккаунта</Text>
      <View style={styles.stick}></View>
       </View>
       

       </View>



)
}

const styles = StyleSheet.create({
button:{
  
  backgroundColor: Colors.LIGHTV,
  marginTop: 50,
  borderRadius: 10,
  marginHorizontal: 10,
    height: 120,
  padding: 25,
},
stick:{
  
    backgroundColor: Colors.LIGHTV,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
      height: 5,
  },
Text:{
 textAlign: 'left',
 fontSize: 25,
 left:40,
 fontWeight: 'bold'
},
TextStatus:{
    textAlign: 'left',
    fontSize: 18,
    left:40,
    top: 5,
    fontWeight: 'medium'
   },
   iconsinprofile:{
    position: 'absolute',  
        top: 55,
        left: 10,
        width: 30,
        height: 30,
        bottom: 10
   },  
})
