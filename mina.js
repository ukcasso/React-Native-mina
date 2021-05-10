import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

const MINA = ({number}) => {
  console.log(number);
  let minaImg = '';
  if (number === '1') {
    minaImg = require('./assets/kang.jpg');
  } else if (number === '2') {
    minaImg = require('./assets/kang2.png');
  }

  return (
    <View>
      <Image source={minaImg} style={styles.Img} />
    </View>
  );
};

const styles = StyleSheet.create({
  Img: {
    width: 100,
    height: 150,
  },
});

export default MINA;
