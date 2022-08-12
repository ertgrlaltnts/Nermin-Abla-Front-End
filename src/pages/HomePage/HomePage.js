import React from 'react';
import {ScrollView, View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './HomePage.style';
import HomeCard from '../../components/HomeCard';
import Config from 'react-native-config';
import Wait from '../../components/Wait';
import LinearGradient from 'react-native-linear-gradient';
import Okay from '../../components/Okay';
import SmallHomeCard from '../../components/SmallHomeCard';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {
  CompleteResponse,
  selectCheckResponse,
  selectWaitFortuneResponse,
  selectWaitMessage,
  UnCheckResponse,
} from '../../../store/fortuneSlice';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const waitFortuneResponse = useSelector(selectWaitFortuneResponse);
  const waitMessage = useSelector(selectWaitMessage);
  const checkResponse = useSelector(selectCheckResponse);

  if (waitFortuneResponse === true) {
    setTimeout(async () => {
      dispatch(CompleteResponse());
      await axios.get(`http://${Config.IP}/fortunes`);
      dispatch(UnCheckResponse());
    }, 15000);
  }

  return (
    <ScrollView style={styles.container}>
      <HomeCard
        text={
          'Kahve falında balık para demekse; en büyük hazinemdir gözlerindeki okyanus...'
        }
        image={require('../../assets/mix.png')}
      />
      <SmallHomeCard
        text={'Kahve falına bakmak için tıkla'}
        image={require('../../assets/cups.png')}
        onPress={() => navigation.navigate('ImagePick')}
      />

      <SmallHomeCard
        text={'Günlük burç yorumun için tıkla'}
        image={require('../../assets/burc.png')}
        onPress={() => navigation.navigate('Horoscope')}
      />

      {waitMessage !== null ? (
        <LinearGradient
          style={styles.gradient}
          colors={['#DAC342', '#C3AF3F', '#AD9C3E']}>
          <View style={styles.wait_container}>
            <Text style={styles.wait}>Hazırlanıyor !</Text>
            <Wait />
          </View>
        </LinearGradient>
      ) : (
        <View />
      )}
      {checkResponse === false ? (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Inbox')}>
          <LinearGradient
            style={styles.gradient}
            colors={['#C70039', '#900C3F', '#581845']}>
            <View style={styles.wait_container}>
              <Text style={styles.wait}>Falınız hazır !</Text>
              <Okay />
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      ) : (
        <View />
      )}
    </ScrollView>
  );
};

export default HomePage;
