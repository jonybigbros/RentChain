import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Colors  from "../../constant/Colors.jsx";
import { Modal} from 'react-native';
import React, { useState } from 'react';


export default function Find(){
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const handleSearchChange = (text) => {setSearchText(text)};
    const apartments = [
     {
      id: '1',
      price: 450000,
      rating: 4.87,
      rooms : 2,
      size: 72,
      floor: '8',
      RentalPeriod: 'на длительный срок',
      city: 'Астана',
      houseName:'ЖК "Темщики"',
      street: 'Щавельская 24/7',
      images:[
        require('../../assets/images/find_default_1.png'),
        require('../../assets/images/find_default_1_2.png'),
        require('../../assets/images/find_default_1_3.png'),
      ]  
     },
     {
      id: '2',
      price: 400000,
      rating: 4.56,
      rooms : 3,
      size: 76,
      floor: '12',
      RentalPeriod: 'на длительный срок',
      city: 'Астана',
      houseName:'ЖК "Пенсия-Хаус"',
      street: 'Старыйбол 66/6',
      images:[
        require('../../assets/images/find_default_2.png'),
        require('../../assets/images/find_default_2_2.png'),
        require('../../assets/images/find_default_2_3.png'),
      ]  
     }
    ]

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
        value={searchText}
        onChangeText={handleSearchChange}
        onFocus={Open}
      /> 
      {/*квартирааа*/}
 {apartments.filter(apartment => apartment.toLowerCase().includes(searchText.toLowerCase())).map((listing) => (
                <View key={listing.id} style={styles.listingContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.container_flats_photos}>
                            {listing.images.map((image, index) => (
                                <Image key={index} source={image} style={styles.flats_photos} />
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.row_price_rating}>
                        <Text style={styles.flat_price}>{listing.price} ₸</Text>
                        <Image source={require('../../assets/images/rating_star.png')} />
                        <Text style={styles.flat_rating}>{listing.rating}</Text>
                    </View>

                    {/* детали квартиры */}
                    <View style={styles.flat_details}>
                        <Text style={styles.flat_detail_item}>Комнаты: {listing.rooms}</Text>
                        <Text style={styles.flat_detail_item}>Площадь: {listing.size} м²</Text>
                        <Text style={styles.flat_detail_item}>Этаж: {listing.floor}</Text>
                        <Text style={styles.flat_detail_item}>Срок аренды: {listing.leaseTerm}</Text>
                    </View>

                    <Text style={styles.flat_adress}>{listing.city}</Text>
                    <Text style={styles.flat_adress}>{listing.houseName}</Text>
                    <Text style={styles.flat_adress}>{listing.street}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    textInput: {
        borderWidth: 1,
        borderColor: Colors.LGREY,
        fontSize: 13,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: Colors.LGREY
    },
    listingContainer: {
        marginVertical: 20,
    },
    container_flats_photos: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    flats_photos: {
        marginRight: 10,
        height: 150,
        width: 150,
        borderRadius: 8,
    },
    flat_price: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'left',
        marginRight: 200,
    },
    row_price_rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    flat_rating: {
        fontSize: 20,
    },
    flat_details: {
        marginLeft: 20,
    },
    flat_detail_item: {
        fontSize: 15,
        marginVertical: 5,
    },
    flat_adress: {
        fontSize: 15,
        color: Colors.GREY,
        marginLeft: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GREY,
    },
    modalContent: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
    },
    cross_button: {
        marginTop: 20,
        marginLeft: 20,
    },
    filter_container: {
        height: 378,
        width: 352,
        marginTop: 70,
        backgroundColor: Colors.LGREY,
        borderRadius: 15,
        alignContent: 'center',
        padding: 10,
        marginLeft: 30,
    },
    app_title: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 10,
        color: Colors.VIOL,
    },
    filter_textInput: {
        height: 40,
        width: 335,
        borderRadius: 10,
        alignContent: 'center',
        marginTop: 5,
        borderWidth: 1,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,
    },
});