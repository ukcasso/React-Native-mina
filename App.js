/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import MINA from './mina';
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

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Kang Mina</Text>
        <MINA number="1" />
        <MINA number="2" />
      </View>
      <View style={styles.Btn}>
        <Button
          style={styles.PressBtn}
          title="PRESS"
          onPress={() => alert('햐햐')}
        />
      </View>
    </>
  );
};

// const MINA = ({type}) => {
//   const [minaImg, setMinaImg] = useState('');
//   if (type === 'one') {
//     setMinaImg(require('./assets/kang.jpg'));
//   } else if (type === 'two') {
//     setMinaImg(require('./assets/kang2.png'));
//   }
//   return (
//     <View>
//       <Image source={minaImg} style={styles.Img} />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    width: '100%',
  },
  Img: {
    width: 100,
    height: 150,
  },
});

export default App;
