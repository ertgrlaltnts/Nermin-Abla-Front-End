import React from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import Close from '../../assets/svg/close.svg';
import styles from './ErrorValidation.style';

const ErrorValidation = ({
  visible,
  close,
  nameError,
  lastNameError,
  emailError,
  passwordError,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LottieView
            style={styles.lottie}
            source={require('../../assets/lottie/error.json')}
            autoPlay
            loop
          />

          <TouchableOpacity style={styles.close} onPress={close}>
            <Close width={30} height={30} fill={'#fff'} />
          </TouchableOpacity>

          <View style={styles.errors}>
            {nameError && <Text style={styles.modalText}>{nameError}</Text>}
            {lastNameError && (
              <Text style={styles.modalText}>{lastNameError}</Text>
            )}
            {emailError && <Text style={styles.modalText}>{emailError}</Text>}
            {passwordError && (
              <Text style={styles.modalText}>{passwordError}</Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorValidation;
