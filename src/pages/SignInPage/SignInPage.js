import React, {useState} from 'react';
import {View, Modal, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';
import styles from './SignInPage.style';
import AuthInput from '../../components/AuthInput';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import AuthButton from '../../components/AuthButton';
import Config from 'react-native-config';
import ErrorValidation from '../../components/ErrorValidation';
import * as Yup from 'yup';
import axios from 'axios';
import {setSignIn} from '../../../store/authSlice';

const SignInPage = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const SignInSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Girdiğiniz isim çok kısa !')
      .max(50, 'Girdiğiniz isim çok uzun !')
      .required('İsim zorunlu.'),
    lastName: Yup.string()
      .min(2, 'Girdiğiniz soyad çok kısa !')
      .max(50, 'Girdiğiniz soyad çok uzun !')
      .required('Soyad zorunlu.'),
    email: Yup.string()
      .email('Geçerli bir adres girin !')
      .required('Adres zorunlu.'),
    password: Yup.string()
      .min(2, 'Girdiğiniz şifre çok kısa !')
      .max(50, 'Girdiğiniz şifre çok uzun !')
      .required('Şifre zorunlu.'),
  });

  const signUser = async props => {
    try {
      await axios.post(`http://${Config.IP}/users`, props);
      await axios.post(`http://${Config.IP}/users/login`, {
        email: props.email,
        password: props.password,
      });
      setLoading(true);
      const responseUser = await axios.get(`http://${Config.IP}/users/user`);
      const user = {
        isLoggedIn: true,
        email: responseUser.data.user.email,
        userName: responseUser.data.user.name,
        lastName: responseUser.data.user.lastName,
        horoscope: responseUser.data.user.horoscope,
        gold: responseUser.data.user.gold,
        profileImg: responseUser.data.user.profileImg,
      };
      setTimeout(() => {
        setLoading(false);
        dispatch(setSignIn(user));
      }, 3000);
      console.log(props);
    } catch (error) {
      console.log(error + 'boş');
    }
  };

  const checkVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={loading}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView
              source={require('../../assets/lottie/coffe_time.json')}
              autoPlay
              loop
            />
          </View>
        </View>
      </Modal>
      <Image
        style={styles.image}
        source={require('../../assets/sukru_select.png')}
      />
      <Formik
        validationSchema={SignInSchema}
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
          horoscope: '',
        }}
        onSubmit={values => signUser(values)}>
        {({handleChange, handleSubmit, errors}) => (
          <>
            <ErrorValidation
              visible={visible}
              close={checkVisible}
              nameError={errors.name}
              lastNameError={errors.lastName}
              emailError={errors.email}
              passwordError={errors.password}
            />

            <AuthInput
              placeholder={'Adınız'}
              iconName="person"
              secureTextEntry={false}
              onChangeText={handleChange('name')}
            />
            <View style={styles.box} />
            <AuthInput
              placeholder={'Soyadınız'}
              iconName="person"
              secureTextEntry={false}
              onChangeText={handleChange('lastName')}
            />
            <View style={styles.box} />
            <AuthInput
              placeholder={'E-mailiniz'}
              iconName="person"
              secureTextEntry={false}
              onChangeText={handleChange('email')}
            />
            <View style={styles.box} />
            <AuthInput
              placeholder={'Şifreniz'}
              iconName="person"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
            />
            <View style={styles.picker}>
              <Picker
                dropdownIconColor={'#4A4C54'}
                selectedValue={language}
                onValueChange={handleChange('horoscope')}>
                <Picker.Item
                  style={styles.pick_item}
                  label="Burcunuz"
                  value="Burcunuz"
                  enabled={false}
                />
                <Picker.Item style={styles.pick_item} label="Koç" value="Koç" />
                <Picker.Item
                  style={styles.pick_item}
                  label="Boğa"
                  value="Boğa"
                />
                <Picker.Item
                  style={styles.pick_item}
                  label="İkizler"
                  value="İkizler"
                />
                <Picker.Item
                  style={styles.pick_item}
                  label="Yengeç"
                  value="Yengeç"
                />
                <Picker.Item
                  style={styles.pick_item}
                  label="Aslan"
                  value="Aslan"
                />
                <Picker.Item
                  style={styles.pick_item}
                  label="Başak"
                  value="Başak"
                />
                <Picker.Item
                  style={styles.pick_item}
                  label="Terazi"
                  value="Terazi"
                />

                <Picker.Item
                  style={styles.pick_item}
                  label="Akrep"
                  value="Akrep"
                />

                <Picker.Item style={styles.pick_item} label="Yay" value="Yay" />

                <Picker.Item
                  style={styles.pick_item}
                  label="Oğlak"
                  value="Oğlak"
                />

                <Picker.Item
                  style={styles.pick_item}
                  label="Kova"
                  value="Kova"
                />

                <Picker.Item
                  style={styles.pick_item}
                  label="Balık"
                  value="Balık"
                />
              </Picker>
            </View>
            <View style={styles.box} />
            <AuthButton
              text="Kayıt ol"
              onPress={
                errors.name ||
                errors.lastName ||
                errors.email ||
                errors.password
                  ? checkVisible
                  : handleSubmit
              }
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignInPage;
