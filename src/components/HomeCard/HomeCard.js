import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './HomeCard.style';

const HomeCard = ({onPress, text, image}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.image} source={image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeCard;
