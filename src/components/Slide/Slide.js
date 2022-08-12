import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Dot from '../../assets/svg/dot.svg';
import Gold from '../../assets/svg/gold.svg';
import styles from './Slide.style';
import LinearGradient from 'react-native-linear-gradient';

const Slide = ({image, name, location, onPress, linear, goldValue}) => {
  return (
    <View style={styles.slide}>
      <LinearGradient style={styles.linearGradient} colors={linear}>
        <Image style={styles.image} source={image} />
      </LinearGradient>
      <View style={styles.text_container}>
        <Text style={styles.fortune_text}>{name}</Text>
        <Text style={styles.fortune_text}>{location}</Text>
        <View style={styles.online}>
          <Text style={styles.fortune_text}>Online</Text>
          <Dot style={styles.dot} width={30} height={30} fill={'#17D300'} />
        </View>

        <TouchableOpacity onPress={onPress}>
          <View style={styles.select_button}>
            <View style={styles.empty_box} />
            <Text style={styles.select_text}>Seç</Text>
            <View style={styles.gold_container}>
              <Text style={styles.gold_text}>{goldValue}</Text>
              <Gold width={30} height={30} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slide;
