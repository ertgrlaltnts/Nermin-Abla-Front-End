import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Okay.style';

const Okay = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/okay.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Okay;
