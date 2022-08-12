import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Loading.style';

const Loading = ({ref}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/coffe_time.json')}
        autoPlay
        loop
        ref={ref}
      />
    </View>
  );
};

export default Loading;
