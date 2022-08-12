import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import styles from './HoroscopePage.style';
import Comment from '../../components/Comment';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {selectHoroscope} from '../../../store/authSlice';
import axios from 'axios';

const HoroscopePage = () => {
  const [data, setData] = useState(null);
  const [askData, setAskData] = useState(null);
  const [careerData, setCareerData] = useState(null);
  const [healthData, setHealthData] = useState(null);
  const horoscope = useSelector(selectHoroscope);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://burcapi.herokuapp.com/get/${horoscope}`)
        .then(response => response.data)
        .then(values => setData(values));

      await axios
        .get(`http://burcapi.herokuapp.com/gets/${horoscope}/ask`)
        .then(response => response.data)
        .then(values => setAskData(values));

      await axios
        .get(`http://burcapi.herokuapp.com/gets/${horoscope}/kariyer`)
        .then(response => response.data)
        .then(values => setCareerData(values));

      await axios
        .get(`http://burcapi.herokuapp.com/gets/${horoscope}/saglik`)
        .then(response => response.data)
        .then(values => setHealthData(values));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    data === null ||
    askData === null ||
    careerData === null ||
    healthData === null
  ) {
    return (
      <View style={styles.loading}>
        <LottieView
          source={require('../../assets/lottie/coffe_time.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.left}>
          <Text style={styles.name}>{data[0].Burc}</Text>
          <Text style={styles.subtitle}>Gezegeni : {data[0].Gezegeni}</Text>
          <Text style={styles.subtitle}>Elementi : {data[0].Elementi}</Text>
        </View>
        <Image
          style={styles.image}
          source={
            data[0].Burc === 'Aslan'
              ? require('../../assets/zodiacs/Aslan.png')
              : data[0].Burc === 'Boğa'
              ? require('../../assets/zodiacs/Boğa.png')
              : data[0].Burc === 'İkizler'
              ? require('../../assets/zodiacs/İkizler.png')
              : data[0].Burc === 'Kova'
              ? require('../../assets/zodiacs/Kova.png')
              : data[0].Burc === 'Başak'
              ? require('../../assets/zodiacs/Başak.png')
              : data[0].Burc === 'Akrep'
              ? require('../../assets/zodiacs/Akrep.png')
              : data[0].Burc === 'Yengeç'
              ? require('../../assets/zodiacs/Yengeç.png')
              : data[0].Burc === 'Balık'
              ? require('../../assets/zodiacs/Balık.png')
              : data[0].Burc === 'Koç'
              ? require('../../assets/zodiacs/Koç.png')
              : data[0].Burc === 'Terazi'
              ? require('../../assets/zodiacs/Terazi.png')
              : data[0].Burc === 'Oğlak'
              ? require('../../assets/zodiacs/Oğlak.png')
              : require('../../assets/zodiacs/Koç.png')
          }
        />
      </View>
      <Comment
        text={data[0].GunlukYorum}
        secondTitle={'Günlük Yorum'}
        icon={'comment'}
      />
      <Comment text={askData[0].Yorum} secondTitle={'Aşk'} icon={'love'} />
      <Comment
        text={careerData[0].Yorum}
        secondTitle={'Kariyer'}
        icon={'career'}
      />
      <Comment
        text={healthData[0].Yorum}
        secondTitle={'Sağlık'}
        icon={'health'}
      />
    </ScrollView>
  );
};

export default HoroscopePage;
