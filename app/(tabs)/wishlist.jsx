import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Colors from '../../constant/Colors.jsx';
import CheckBox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { Modal, Pressable } from 'react-native';


export default function Wishlist() {
  const [selectedApartments, setSelectedApartments] = useState([false, false]);
  const [modalVisible, setModalVisible] = useState(false);


  const Compare = () => {
    const selected = selectedApartments.filter(item => item);
    if (selected.length === 2) {
      setModalVisible(true);
    } else {
      Alert.alert('Ошибка', 'Пожалуйста, выберите две квартиры для сравнения.');
    }
  };

  const formatNumber = (number) => {
    return number.toLocaleString('ru-RU');
  };  

  const isBetter = (feature, a, b) => {
    if (feature === 'price') return a < b; 
    if (feature === 'rating') return a > b; 
    if (feature === 'rooms') return a > b; 
    if (feature === 'size') return a > b; 
    if (feature === 'parking') return a; 
    if (feature === 'bathrooms') return a > b; 
    if (feature === 'furniture') return a; 
    return false;
  };

  const apartment1 = {
    price: 400000,
    rating: 4.87,
    rooms: 3,
    size: 76,
    parking: true,
    bathrooms: 1,
    furniture: false
  }; 
  const apartment2 = {
    price: 450000,
    rating: 4.60,
    rooms: 2,
    size: 97,
    parking: false,
    bathrooms: 1,
    furniture: true
  }; 
  return (
    
    <View>
        <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>

      <View stle={styles.title_cross_row}>
    <TouchableOpacity onPress={() => setModalVisible(false)}>
      <Image source={require('../../assets/images/cross.png')}
      style={styles.cross_button}/>
    </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Сравнение</Text>
      </View>

      {/* фотографий квартир :)*/}
      <View style={styles.row}>
        <Image source={require('../../assets/images/flats_image1.png')}
              style={styles.compare_photos}/>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}> VS</Text>
        <Image source={require('../../assets/images/flats_image2.png')}
              style={styles.compare_photos}/>
      </View>
      {/* название квартир :)*/}
      <View style={styles.row}>
        <Text style={styles.compare_flat_title}> ЖК Адам</Text>
        <Text style={styles.compare_flat_title}> ЖК Рубин</Text>   
      </View>
      <View style={{
        height: 3,
        backgroundColor: Colors.VIOL2,
        marginHorizontal: 10,
        borderRadius:15
        }}></View>
      
      <View style={styles.row}>
          <Text style={styles.feature}>Price</Text>
          <Text style={isBetter('price', apartment1.price, apartment2.price) ? styles.better : styles.normal}>
            {formatNumber(apartment1.price)} ₸
          </Text>
          <Text style={isBetter('price', apartment2.price, apartment1.price) ? styles.better : styles.normal}>
            {formatNumber(apartment2.price)} ₸
          </Text> 
        </View>
        <View style={styles.row}>
          <Text style={styles.feature}>Rating</Text>
          <Text style={isBetter('rating', apartment1.rating, apartment2.rating) ? styles.better : styles.normal}>
            {formatNumber(apartment1.rating)}
          </Text>
          <Text style={isBetter('rating', apartment2.rating, apartment1.rating) ? styles.better : styles.normal}>
            {formatNumber(apartment2.rating)} 
          </Text> 
        </View>
        <View style={styles.row}>
          <Text style={styles.feature}>Rooms</Text>
          <Text style={isBetter('rooms', apartment1.rooms, apartment2.rooms) ? styles.better : styles.normal}>
            {formatNumber(apartment1.rooms)}
          </Text>
          <Text style={isBetter('rating', apartment2.rooms, apartment1.rooms) ? styles.better : styles.normal}>
            {formatNumber(apartment2.rooms)} 
          </Text> 
        </View>




    </View>
  </View>
</Modal>


      <TouchableOpacity
        style={{
          backgroundColor: Colors.WHITE,
          borderWidth: 5,
          borderColor: Colors.VIOL,
          borderRadius: 25,
          left: 10,
          top: 50,
          width: 140,
          height: 40,
        }}
        onPress={Compare} 
      >
        <Text style={styles.buttonText}>Сравнить</Text>
      </TouchableOpacity>

      {/* Квартира 1 */}
      <View style={styles.flats_buttons}>
        <Image
          source={require('../../assets/images/flats_image1.png')}
          style={styles.flats_images}
        />
        <Text style={styles.flats_name}>ЖК Адам</Text>
        <Text style={styles.flats_streetname}>ул Сыганак 8</Text>

        <CheckBox
          value={selectedApartments[0]}
          onValueChange={(newValue) => {
            const updatedSelection = [...selectedApartments];
            updatedSelection[0] = newValue;
            setSelectedApartments(updatedSelection);
          }}
          color={Colors.VIOL}
          style={styles.checkbox}
        />

        <Image
          source={require('../../assets/images/flats_mappin.png')}
          style={styles.flats_mappinicon}
        />
      </View>

      <StatusBar style="auto" />

      {/* Квартира 2 */}
      <View style={[styles.flats_buttons, { marginTop: 20 }]}>
        <Image
          source={require('../../assets/images/flats_image2.png')}
          style={styles.flats_images}
        />
        <Text style={styles.flats_name}>ЖК Рубин</Text>
        <Text style={styles.flats_streetname}>ул Сауран 6</Text>

        <CheckBox
          value={selectedApartments[1]}
          onValueChange={(newValue) => {
            const updatedSelection = [...selectedApartments];
            updatedSelection[1] = newValue;
            setSelectedApartments(updatedSelection);
          }}
          color={Colors.VIOL}
          style={styles.checkbox}
        />

        <Image
          source={require('../../assets/images/flats_mappin.png')}
          style={styles.flats_mappinicon}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.VIOL,
  },
  flats_images: {
    width: 390,
    height: 130,
    borderRadius: 11,
  },
  flats_buttons: {
    marginHorizontal: 10,
    borderRadius: 11,
    marginTop: 70,
    position: 'relative',
    width: 390,
    height: 130,
  },
  flats_name: {
    position: 'absolute',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 30,
    marginTop: 65,
    color: Colors.WHITE,
  },
  flats_streetname: {
    position: 'absolute',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 90,
    color: Colors.WHITE,
  },
  flats_mappinicon: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginLeft: 13,
    marginTop: 67,
  },
  checkbox: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREY,
  },
  modalContent: {
    marginTop: 150,
    width: '100%',
    height:'95%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: Colors.VIOL,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',     // элементы идут в линию
    alignItems: 'center',     // выравнивание по вертикали
    justifyContent: 'space-between', // можно менять: 'center', 'space-around' и т.д.
    padding: 10,
    
      },
  compare_photos:{
    // flexDirection: 'row',
    width: 140,
    height: 86,
    padding:20,
    marginTop:20,
    borderRadius: 10
  },
  cross_button:{
    marginTop:20,
    marginLeft: 20
  },
  title_cross_row:{
    flexdirection:'row'
  },
  compare_flat_title:{
    fontSize: 20,
    color: Colors.VIOL2,
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  better:{
    height: 20,
    backgroundColor: Colors.LIGHTV,
    marginLeft: 150,
    borderRadius:10,
    width:110,

    
  },
  normal:{
    height: 20,
    backgroundColor: Colors.GREY,
   // marginH: 10,
    borderRadius: 10,
    width:100,
   // position: 'absolute'
  },

  
});
