import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import Colors from "../../constant/Colors.jsx";
import React, { useState } from 'react';

export default function Find() {
  const [modalVisible, setModalVisible] = useState(false); // Модальное окно для квартиры
  const [searchModalVisible, setSearchModalVisible] = useState(false); // Модальное окно для поисковика
  const [searchText, setSearchText] = useState('');
  const [selectedApartment, setSelectedApartment] = useState(null); // Состояние для выбранной квартиры

  const handleSearchChange = (text) => { setSearchText(text) };

  const apartments = [
    {
      id: '1',
      price: "450 000",
      rating: 4.87,
      rooms: 2,
      size: 72,
      floor: '8',
      RentalPeriod: 'на длительный срок',
      city: 'Астана',
      houseName: 'ЖК "Темщики"',
      street: 'Щавельская 24/7',
      images: [
        require('../../assets/images/find_default_1.png'),
        require('../../assets/images/find_default_1_2.png'),
        require('../../assets/images/find_default_1_3.png'),
      ]
    },
    {
      id: '2',
      price: "400 000",
      rating: 4.56,
      rooms: 3,
      size: 76,
      floor: '12',
      RentalPeriod: 'на длительный срок',
      city: 'Астана',
      houseName: 'ЖК "Пенсия-Хаус"',
      street: 'Старыйбол 66/6',
      images: [
        require('../../assets/images/find_default_2.png'),
        require('../../assets/images/find_default_2_2.png'),
        require('../../assets/images/find_default_2_3.png'),
      ]
    }
  ];

  const openApartmentModal = (apartment) => {
    setSelectedApartment(apartment);  // Устанавливаем выбранную квартиру
    setModalVisible(true);            // Открываем модальное окно
    setSearchModalVisible(false);     // Закрываем модальное окно поиска
  };

  return (
    <View style={styles.container}>
      {/* Модальное окно для поисковика */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={searchModalVisible}
        onRequestClose={() => setSearchModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View>
              <TouchableOpacity onPress={() => setSearchModalVisible(false)}>
                <Image source={require('../../assets/images/arrow_back.png')} style={styles.cross_button} />
              </TouchableOpacity>
              <Text style={styles.app_title}>RentChain</Text>
            </View>
            <View style={styles.filter_container}>
              <TextInput style={styles.filter_textInput} placeholder='Страна, город, район или адрес '></TextInput>
              {/* 1 фильтр */}
              <View style={styles.filter_option}>
                <View style={styles.filter_icon}></View>
                <Text style={{ flex: 1 }}>
                  Нарисовать свою зону{'\n'}Нарисуйте на карте зону поиска
                </Text>
              </View>
              {/* 2 фильтр */}
              <View style={styles.filter_option}>
                <View style={styles.filter_icon}></View>
                <Text style={{ flex: 1 }}>
                  Нарисовать свою зону{'\n'}Нарисуйте на карте зону поиска
                </Text>
              </View>
              {/* 3 фильтр */}
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


      {/* Модальное окно для квартиры */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.listingContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                 {/* Показываем только первое изображение */}
            {selectedApartment && selectedApartment.images && selectedApartment.images.length > 0 && (
              <Image source={selectedApartment.images[0]} style={[styles.advert_photo,  {resizeMode: 'cover'}]} />
            )}
                <Image source={require('../../assets/images/arrow_back.png')} style={styles.cross_button} />
              </TouchableOpacity>
              <Image source={require('../../assets/images/advert_share_icon.png')} style={styles.advert_share} />
              <Image source={require('../../assets/images/heart_line.png')} style={styles.advert_like} />
              <Image source={require('../../assets/images/advert_1of4_icon.png')} style={styles.advert_photos_number} />

              <View style={styles.row_price_rating}>
                {selectedApartment && selectedApartment.price ? 
                (<Text style={styles.flat_price}>{selectedApartment.price} ₸</Text>) : (<Text style={styles.flat_price}>Нет информации о цене</Text>)}
                <Image source={require('../../assets/images/rating_star.png')} />
                {selectedApartment && selectedApartment.rating ? ( <Text style={styles.flat_rating}>{selectedApartment.rating}</Text>) : (<Text style={styles.flat_rating}>Нет рейтинга</Text>)}
              </View>

              {/* Разделенные детали квартиры */}
              <View style={styles.flat_details}>
                {selectedApartment && selectedApartment.rooms ? (<Text style={styles.flat_detail_item}>{selectedApartment.rooms} комн. · </Text> ) : (<Text style={styles.flat_detail_item}>Нет информации о комнатах · </Text>)}
                {selectedApartment && selectedApartment.size ? (
                  <Text style={styles.flat_detail_item}>{selectedApartment.size} м² ·</Text>
                ) : (
                  <Text style={styles.flat_detail_item}>Нет информации о площади ·</Text>
                )}
                {selectedApartment && selectedApartment.floor ? (
                  <Text style={styles.flat_detail_item}>{selectedApartment.floor} этаж · </Text>
                ) : (
                  <Text style={styles.flat_detail_item}>Нет информации о этаже ·</Text>
                )}
                {selectedApartment && selectedApartment.RentalPeriod ? (
                  <Text style={styles.flat_detail_item}>{selectedApartment.RentalPeriod} </Text>
                ) : (
                  <Text style={styles.flat_detail_item}>Нет информации о сроке аренды</Text>
                )}
              </View>
            
              <View style={styles.flat_details}>
                {selectedApartment && selectedApartment.city ? (
                  <Text style={styles.flat_adress}>{selectedApartment.city} ·</Text>
                ) : (
                  <Text style={styles.flat_adress}>Нет информации о городе ·</Text>
                )}
                {selectedApartment && selectedApartment.houseName ? (
                  <Text style={styles.flat_adress}>{selectedApartment.houseName} ·</Text>
                ) : (
                  <Text style={styles.flat_adress}>Нет информации о доме ·</Text>
                )}
                {selectedApartment && selectedApartment.street ? (
                  <Text style={styles.flat_adress}>{selectedApartment.street}</Text>
                ) : (
                  <Text style={styles.flat_adress}>Нет информации об улице</Text>
                )}
              </View>
            <View style={styles.advert_arendodator_container}>
              <Image
                  source={require('../../assets/images/user_profile.png')}
                  style={styles.arendodator_avatar}
                />
                <Text style={styles.arendodator_name}>Иванов Иван Иванович</Text>
               <Text style={styles.arendodator_time}>Сдает 13 лет</Text>
            </View>







            </ScrollView>
          </View>
        </View>
      </Modal>

      <Text style={styles.app_title}>RentChain</Text>

      <TextInput
        placeholder="Поиск..."
        style={styles.textInput}
        value={searchText}
        onChangeText={handleSearchChange}
        onFocus={() => setSearchModalVisible(true)}  // Открываем модальное окно для поиска при фокусе
      />

      {/* Вертикальная прокрутка списка квартир */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {apartments.filter(apartment => apartment.city.toLowerCase().includes(searchText.toLowerCase())).map((listing) => (
          <View key={listing.id} style={styles.listingContainer}>
            {/* Горизонтальная прокрутка изображений квартиры */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.container_flats_photos}>
                {listing.images.map((image, index) => (
                  <Image key={index} source={image} style={styles.flats_photos} />
                ))}
              </View>
            </ScrollView>

            <View style={styles.row_price_rating}>
              {listing && listing.price ? (
                <Text style={styles.flat_price}>{listing.price} ₸</Text>
              ) : (
                <Text style={styles.flat_price}>Нет информации о цене</Text>
              )}
              <Image source={require('../../assets/images/rating_star.png')} />
              {listing && listing.rating ? (
                <Text style={styles.flat_rating}>{listing.rating}</Text>
              ) : (
                <Text style={styles.flat_rating}>Нет рейтинга</Text>
              )}
            </View>

            {/* Разделенные детали квартиры */}
            <View style={styles.flat_details}>
              {listing && listing.rooms ? (
                <Text style={styles.flat_detail_item}>{listing.rooms} комн. · </Text>
              ) : (
                <Text style={styles.flat_detail_item}>Нет информации о комнатах · </Text>
              )}
              {listing && listing.size ? (
                <Text style={styles.flat_detail_item}>{listing.size} м² ·</Text>
              ) : (
                <Text style={styles.flat_detail_item}>Нет информации о площади ·</Text>
              )}
              {listing && listing.floor ? (
                <Text style={styles.flat_detail_item}>{listing.floor} этаж · </Text>
              ) : (
                <Text style={styles.flat_detail_item}>Нет информации о этаже ·</Text>
              )}
              {listing && listing.RentalPeriod ? (
                <Text style={styles.flat_detail_item}>{listing.RentalPeriod} </Text>
              ) : (
                <Text style={styles.flat_detail_item}>Нет информации о сроке аренды</Text>
              )}
            </View>
            
            <View style={styles.flat_details}>
              {listing && listing.city ? (
                <Text style={styles.flat_adress}>{listing.city} ·</Text>
              ) : (
                <Text style={styles.flat_adress}>Нет информации о городе ·</Text>
              )}
              {listing && listing.houseName ? (
                <Text style={styles.flat_adress}>{listing.houseName} ·</Text>
              ) : (
                <Text style={styles.flat_adress}>Нет информации о доме ·</Text>
              )}
              {listing && listing.street ? (
                <Text style={styles.flat_adress}>{listing.street}</Text>
              ) : (
                <Text style={styles.flat_adress}>Нет информации об улице</Text>
              )}
            </View>
            {/* Кнопка открытия модального окна для квартиры */}
 <TouchableOpacity onPress={() => openApartmentModal(listing)} style={styles.openModalButton}>
              <Text style={styles.openModalButtonText}>Подробнее</Text>
            </TouchableOpacity>

           
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  listContainer: {
    paddingBottom: 20,  
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
    paddingHorizontal: 10,  
  },
  container_flats_photos: {
    flexDirection: 'row',  
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  flats_photos: {
    marginRight: 10,
    height: 200,
    borderRadius: 8,
  },
  row_price_rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  flat_price: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left',
    marginRight: 200,
  },
  flat_rating: {
    fontSize: 20,
  },
  flat_details: {
    marginLeft: 10,
    flexDirection: 'row',
    marginRight: 20
  },
  flat_detail_item: {
    fontSize: 15,
    marginVertical: 5,
  },
  flat_adress: {
    fontSize: 15,
    color: Colors.GREY,
    marginLeft: 10
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
    position: 'relative',
    paddingTop: 0,
    paddingBottom:0 
  },
  cross_button: {
    position: 'absolute', 
    top: 10, 
    left: 10,
    zIndex: 1, 
    width: 30, 
    height: 30, 
  },
  advert_photo: {
    width: '100%', 
    height: 300, 
    position: 'relative', 
    borderRadius: 8,
    marginTop: 0, 
  },
   advert_share: {
    position: 'absolute', 
    top: 10, 
    left: 300, 
    zIndex: 1, 
    width: 30, 
    height: 30, 
  },
  advert_like: {
    position: 'absolute', 
    top: 10, 
    left: 350, 
    zIndex: 1, 
    width: 30, 
    height: 30, 
  },
  
  advert_arendodator_container:{
    backgroundColor: Colors.LIGHTV,
         marginTop: 30,
         borderRadius: 10,
         marginHorizontal: 10,
         height: 70,
         flexDirection: 'row',
         alignItems: 'center',
         paddingHorizontal: 15,
         position: 'relative'
  },
  arendodator_avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      arendodator_name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.WHITE,
        marginLeft: 75,
        position: 'absolute' 
      },
      arendodator_time: {
        fontSize: 15,
        color: Colors.WHITE,
        marginLeft: 75,
        marginTop: 105,
       // position:'absolute' 
      },
  advert_photos_number:{
    position: 'absolute', 
    top: 270, 
    left: 330, 
    zIndex: 1,
    flexDirection:'row' 
  },
  app_title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    color: Colors.VIOL,
  },
  filter_container: {
    height: 378,
    width: 352,
    marginTop: 70,
    backgroundColor: Colors.LGREY,
    borderRadius: 15,
    padding: 10,
    marginLeft: 30,
  },
  filter_textInput: {
    height: 40,
    width: 335,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
  },
  openModalButton: {
    backgroundColor: Colors.VIOL,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    width: '70%',
    alignSelf: 'center',
  },
  openModalButtonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  filter_option:{
    backgroundColor: Colors.WHITE,
    height : 65,
    width:335,
    marginTop:20,
    flexDirection: 'row',
    padding: 10,
    borderRadius :10
  },
  filter_icon:{
    width: 45,
    height: 45,
    backgroundColor: Colors.GREY,
    borderRadius: 10,
    marginRight: 15, 
  },
});
