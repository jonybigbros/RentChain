import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../constant/Colors.jsx';
import CheckBox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';

export default function Wishlist() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
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
      >
        <Text style={styles.buttonText}>Сравнить</Text>
      </TouchableOpacity>

      <View style={styles.flats_buttons}>
        <Image
          source={require('../../assets/images/flats_image1.png')}
          style={styles.flats_images}
        />
        <Text style={styles.flats_name}>ЖК Адам</Text>
        <Text style={styles.flats_streetname}>ул Сыганак 8</Text>

        <CheckBox
          value={isChecked}
          onValueChange={setChecked}
          color={Colors.VIOL}
          style={styles.checkbox}
        />

        <Image
          source={require('../../assets/images/flats_mappin.png')}
          style={styles.flats_mappinicon}
        />   
      </View>

      <StatusBar style="auto" />


      <View style={[styles.flats_buttons,{marginTop:20}]}> 
        <Image
          source={require('../../assets/images/flats_image1.png')}
          style={styles.flats_images}
        />
        <Text style={styles.flats_name}>ЖК Адам</Text>
        <Text style={styles.flats_streetname}>ул Сыганак 8</Text>

        <CheckBox
          value={isChecked}
          onValueChange={setChecked}
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
});
