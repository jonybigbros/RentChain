import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Colors  from "../../constant/Colors.jsx";
import { Modal} from 'react-native';
import React, { useState } from 'react';


export default function Find(){
    const [modalVisible, setModalVisible] = useState(false);

 const Open = () => {
   setModalVisible(true);
    }
  

return(
<View>

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
   <View>
    <TouchableOpacity onPress={() => setModalVisible(false)}>
  <Image source={require('../../assets/images/arrow_back.png')} style={styles.cross_button} />
</TouchableOpacity>
<Text style={styles.app_title}>RentChain</Text>
</View>
<View style={styles.filter_container}>
<TextInput style={styles.filter_textInput} placeholder='Страна, город, район или адрес '></TextInput>
<View style={styles.filter_option}>
    <View style={styles.filter_icon}></View>
    <Text style={{ flex: 1 }}>
  Нарисовать свою зону{'\n'}Нарисуйте на карте зону поиска
</Text>
</View>

<View style={styles.filter_option}>
    <View style={styles.filter_icon}></View>
    <Text style={{ flex: 1 }}>
  Нарисовать свою зону{'\n'}Нарисуйте на карте зону поиска
</Text>
</View>

<View style={styles.filter_option}>
    <View style={styles.filter_icon}></View>
    <Text style={{ flex: 1 }}>
  Нарисовать свою зону{'\n'}Нарисуйте на карте зону поиска
</Text>
</View>



</View>

</View>
</View>
</Modal>





<Text style={styles.app_title}>RentChain</Text>

  <TextInput
        placeholder="Поиск..."
        style={styles.textInput}
        onFocus={Open}
      /> 
 {/* объявление 1*/}     
<View>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.container_flats_photos}>
<Image source={require('../../assets/images/find_default_1.png')}
style={styles.flats_photos}/>
<Image source={require('../../assets/images/find_default_1_2.png')}
 style={styles.flats_photos}/>
<Image source={require('../../assets/images/find_default_1_3.png')}/>
</View>
</ScrollView>
<Image source={require('../../assets/images/heart_line.png')}
style={styles.heart}/>
<View style={styles.row_price_rating}>
    <Text style={styles.flat_price}>450 000 ₸</Text>
    <Image source={require('../../assets/images/rating_star.png')}/>
    <Text style={styles.flat_rating}>4.87</Text>
</View>
<Text style={styles.flat_details}>2 комн. · 71 м2 · этаж 8/12 · на длительный срок</Text>
<Text style={styles.flat_adress}>Астана, ЖК “Темщики”, Щавельская 24/7</Text>
</View>

{/* объявление 2*/}     
<View>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.container_flats_photos}>
<Image source={require('../../assets/images/find_default_2.png')}
style={styles.flats_photos}/>
<Image source={require('../../assets/images/find_default_2_2.png')}
 style={styles.flats_photos}/>
<Image source={require('../../assets/images/find_default_2_3.png')}/>
</View>
</ScrollView>
<Image source={require('../../assets/images/heart_fill.png')}
style={styles.heart}/>
<View style={styles.row_price_rating}>
    <Text style={styles.flat_price}>400 000 ₸</Text>
    <Image source={require('../../assets/images/rating_star.png')}/>
    <Text style={styles.flat_rating}>4.56</Text>
</View>
<Text style={styles.flat_details}>3 комн. · 76 м2 · этаж 2/12 · на короткий срок</Text>
<Text style={styles.flat_adress}>Астана, ЖК “Пенсия-хаус”, Старыйбол 66/6</Text>
</View>





















</View>


)
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: Colors.LGREY,
        fontSize: 13,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: Colors.LGREY
        
      },
    container_flats_photos: {
        flexDirection: 'row',    
        alignItems: 'center',     
        //justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
       
    },
    flats_photos: {
      marginRight: 10, 
    },
    flat_price:{
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'left',
        marginRight:200

    },
    row_price_rating:{
        flexDirection:'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    flat_rating:{
        fontSize :20,
    },
    flat_details:{
        fontSize: 15,
        marginLeft :20,
        TextAlign: 'left'
    },
    flat_adress:{
        fontSize:15,
        color: Colors.GREY,
        marginLeft: 20,
        textAlign: 'left'
    },
     heart:{
        position: 'absolute',
        marginLeft: 350,
        marginVertical: 170
     },
       modalContainer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: Colors.GREY,
       },
       modalContent: {
         width: '100%',
         height:'100%',
         backgroundColor: 'white',
         borderRadius: 10,
       },
       cross_button:{
        marginTop:20,
        marginLeft: 20
      },
      filter_container:{
        height :378,
        width: 352,
        marginTop: 70,
        backgroundColor : Colors.LGREY,
        borderRadius: 15,
        alignContent : 'center',
        padding :10,
        marginLeft: 30
      },
      app_title:{
        marginTop:10,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 10,
        color:Colors.VIOL
      },
      back_title:{
        flexDirection:'row'
      },
      filter_textInput:{
        height: 40,
        width: 335,
        borderRadius: 10,
        alignContent:'center',
        marginTop:5,
        borderWidth:1,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,  
      },
      filter_option: {
        width: 335,
        height: 65,
        borderRadius: 12,
        backgroundColor: Colors.WHITE, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 15,
      },
      
      filter_icon: {
        height: 45,
        width: 45,
        backgroundColor: Colors.GREY, 
        marginRight: 10,
        borderRadius: 8,
      },
      
  });
  