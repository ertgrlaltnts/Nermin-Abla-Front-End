import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Cup from '../../assets/svg/cup.svg';
import styles from './ResponseBox.style';

const ResponseBox = ({date, isVisible, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Cup width={35} height={35} fill={'#fff'} />
        <View>
          <Text style={styles.text}>Kahve</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        {!isVisible ? <View style={styles.visible} /> : <View />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResponseBox;
