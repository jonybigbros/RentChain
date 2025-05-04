import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../../constant/Colors.jsx'; 

export default function RoleToggle() {
  const [selectedRole, setSelectedRole] = useState('arenduyu'); 

  return (
    <View style={styles.container}>
      <View style={styles.toggleWrapper}>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedRole === 'arenduyu' ? styles.activeLeft : styles.inactive
          ]}
          onPress={() => setSelectedRole('arenduyu')}
        >
          <Text
            style={
              selectedRole === 'arenduyu' ? styles.activeText : styles.inactiveText
            }
          >
            Арендую
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedRole === 'sdayu' ? styles.activeRight : styles.inactive
          ]}
          onPress={() => setSelectedRole('sdayu')}
        >
          <Text
            style={
              selectedRole === 'sdayu' ? styles.activeText : styles.inactiveText}
          >
            Сдаю
          </Text>
        </TouchableOpacity>
      </View>


      {selectedRole === 'sdayu' ? (
       <View>
       <View style={styles.flats_buttons}>
          <Image
            source={require('../../assets/images/flats_image1.png')}
            style={styles.flats_images}
          />
          <Text style={styles.flats_name}>ЖК Адам</Text>
          <Text style={styles.flats_streetname}>ул Сыганак 8</Text>
          <Image
            source={require('../../assets/images/flats_mappin.png')}
            style={styles.flats_mappinicon}
                  />
        </View>
        <TouchableOpacity style={styles.adding_button}>
      <Image source={require('../../assets/images/add_button.png')}/>
    </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.flats_buttons}>
          <Image
            source={require('../../assets/images/flats_image2.png')}
            style={styles.flats_images}
          />
          <Text style={styles.flats_name}>ЖК Рубин</Text>
          <Text style={styles.flats_streetname}>ул Сауран 6</Text>
           <Image
            source={require('../../assets/images/flats_mappin.png')}
            style={styles.flats_mappinicon}
                  />
        </View>
        
      )}

    
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },
  toggleWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.VIOL2, // фиолетовый фон
    borderRadius: 25,
    overflow: 'hidden',
  },
  toggleOption: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  activeLeft: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.VIOL2,
    borderWidth:5
  },
  activeRight: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.VIOL2,
    borderWidth:5
  },
  inactive: {
    backgroundColor: Colors.VIOL2,
  },
  activeText: {
    color: Colors.VIOL2,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  inactiveText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
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
      marginTop: 30,
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
    adding_button:{
      marginTop: 30,
      marginLeft: 190
    }
});
