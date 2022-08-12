import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './SmallHomeCard.style';

const SmallHomeCard = ({onPress, text, image}) => {
  return (
    <LinearGradient
      colors={['#652A6C', '#A443AF', '#EA72C9']}
      style={styles.linearGradient}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <Image style={styles.image} source={image} />
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default SmallHomeCard;
