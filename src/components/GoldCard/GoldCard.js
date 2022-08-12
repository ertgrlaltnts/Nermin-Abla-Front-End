import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Gold10 from '../../assets/svg/gold.svg';
import Gold50 from '../../assets/svg/25-gold.svg';
import Gold100 from '../../assets/svg/50-gold.svg';
import styles from './GoldCard.style';

const GoldCard = ({value, onPress}) => {
  return (
    <View style={styles.container}>
      {value === 10 ? (
        <Gold10 width={50} height={50} />
      ) : value === 25 ? (
        <Gold50 width={50} height={50} />
      ) : (
        <Gold100 width={50} height={50} />
      )}
      <Text style={styles.value}>{value + ' Gold'}</Text>
      <TouchableOpacity style={styles.buy_button} onPress={onPress}>
        <Text style={styles.buy_text}>Satın Al</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoldCard;
