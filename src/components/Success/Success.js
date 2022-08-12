import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Success.style';

const Success = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/success.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Success;
