import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './AddGoldPage.style';
import Config from 'react-native-config';
import GoldCard from '../../components/GoldCard';
import Close from '../../assets/svg/close.svg';
import Gold10 from '../../assets/svg/gold.svg';
import Gold25 from '../../assets/svg/25-gold.svg';
import Gold50 from '../../assets/svg/50-gold.svg';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {incrementGolds} from '../../../store/authSlice';

const AddGoldPage = () => {
  const [payModal, setPayModal] = useState({isVisible: false, value: null});
  const dispatch = useDispatch();

  const close = () => {
    setPayModal({isVisible: false, value: null});
  };

  const goldSelection = value => {
    setPayModal({isVisible: true, value: value});
  };

  const incrementGold = async () => {
    await axios.post(`http://${Config.IP}/users/gold/add`, {
      increment: payModal.value,
    });
    dispatch(incrementGolds(payModal.value));
    setPayModal({isVisible: false, value: null});
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={payModal.isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.close} onPress={close}>
              <Close width={30} height={30} fill={'#fff'} />
            </TouchableOpacity>
            <View style={styles.modal_middle}>
              {payModal.value === 10 ? (
                <Gold10 width={80} height={80} />
              ) : payModal.value === 25 ? (
                <Gold25 width={80} height={80} />
              ) : (
                <Gold50 width={80} height={80} />
              )}
              <Text style={styles.gold_value}>{payModal.value} Gold</Text>
              <TouchableWithoutFeedback onPress={incrementGold}>
                <View style={styles.gold_button}>
                  <Text style={styles.gold_pay}>{payModal.value} ₺</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </Modal>

      <GoldCard value={10} onPress={() => goldSelection(10)} />
      <GoldCard value={25} onPress={() => goldSelection(25)} />
      <GoldCard value={50} onPress={() => goldSelection(50)} />
      <View style={styles.info}>
        <Text style={styles.info_text}>
          Bilgi : Her gün hesabınıza 1 gold otomatik olarak eklenir.
        </Text>
      </View>
    </View>
  );
};

export default AddGoldPage;
