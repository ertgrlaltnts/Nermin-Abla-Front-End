import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Gold from '../../assets/svg/gold.svg';
import styles from './HeaderLeft.style';
import {useSelector} from 'react-redux';
import {selectGold} from '../../../store/authSlice';

const HeaderLeft = ({onPress}) => {
  const gold = useSelector(selectGold);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.gold}>
        <Gold width={30} height={30} />
        <Text style={styles.gold_text}>{gold}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderLeft;
