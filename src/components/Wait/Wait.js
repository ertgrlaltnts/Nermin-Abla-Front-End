import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Wait.style';

const Wait = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/wait.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Wait;
