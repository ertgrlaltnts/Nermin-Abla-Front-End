import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Success from '../../components/Success';
import styles from './TransferPage.style';
import axios from 'axios';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import {WaitResponse} from '../../../store/fortuneSlice';
import {decrementGolds} from '../../../store/authSlice';

const TransferPage = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {image1, image2, image3, fortune, goldValue} = route.params;
  const onTransfer = async () => {
    await axios.post(`http://${Config.IP}/fortunes`, {
      image1,
      image2,
      image3,
      fortune,
    });
    dispatch(WaitResponse());
    await axios.post(`http://${Config.IP}/users/gold/remove`, {
      decrement: goldValue,
    });
    dispatch(decrementGolds(goldValue));
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Success />
      <TouchableOpacity onPress={onTransfer}>
        <View style={styles.complete}>
          <Text style={styles.complete_text}>Falını Tamamla</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransferPage;
