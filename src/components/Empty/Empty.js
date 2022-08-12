import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Empty.style';

const Empty = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require('../../assets/lottie/empty.json')}
        autoPlay
        loop
      />
      <Text style={styles.text}>Gelen kutunuz boş ...</Text>
    </View>
  );
};

export default Empty;
