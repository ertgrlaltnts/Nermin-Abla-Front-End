import React, {useState} from 'react';
import {Modal, View, TouchableOpacity, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './TellerSelectPage.style';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import Slide from '../../components/Slide';
import Close from '../../assets/svg/close.svg';
import {selectGold} from '../../../store/authSlice';

const TellerSelectPage = ({navigation, route}) => {
  const {imageUri1, imageUri2, imageUri3} = route.params;
  const [gold, setGold] = useState(false);
  const currentGold = useSelector(selectGold);

  const close = () => {
    setGold(false);
  };

  const goFinishPage = fortune => {
    if (fortune > currentGold) {
      setGold(true);
    } else {
      const data = {
        image1: imageUri1,
        image2: imageUri2,
        image3: imageUri3,
        fortune: fortune,
        goldValue: fortune,
      };
      navigation.navigate('Transfer', data);
    }
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={gold}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.close} onPress={close}>
              <Close width={30} height={30} fill={'#fff'} />
            </TouchableOpacity>
            <View style={styles.middle}>
              <LottieView
                style={styles.lottie}
                source={require('../../assets/lottie/gold.json')}
                autoPlay
                loop
              />
              <Text style={styles.enough}>Gold'unuz yetersiz !</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddGold')}>
                <View style={styles.pay}>
                  <Text style={styles.pay_text}>Gold Satın Al !</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Swiper
        style={styles.wrapper}
        activeDotColor="#652A6C"
        buttonColor="#652A6C"
        showsButtons={false}>
        <Slide
          image={require('../../assets/nermin_select.png')}
          name={'Nermin Saygıner'}
          location={'Istanbul / Taksim'}
          linear={['#6E4F72', '#A278A7', '#BD8CC3']}
          goldValue={1}
          onPress={() => goFinishPage(1)}
        />
        <Slide
          image={require('../../assets/melahat_select.png')}
          name={'Melahat Hürkuş'}
          location={'Izmir / Ödemiş'}
          linear={['#FF9700', '#EFC538', '#E2FC0D']}
          goldValue={2}
          onPress={() => goFinishPage(2)}
        />
        <Slide
          image={require('../../assets/sukru_select.png')}
          name={'Şükrü Altınyıldız'}
          location={'Mersin / Tarsus'}
          linear={['#0D9AFC', '#0F65A0', '#9119EF']}
          goldValue={3}
          onPress={() => goFinishPage(3)}
        />
      </Swiper>
    </View>
  );
};

export default TellerSelectPage;
