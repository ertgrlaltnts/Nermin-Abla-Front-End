import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, Modal} from 'react-native';
import {Formik} from 'formik';
import LottieView from 'lottie-react-native';
import User from '../../assets/svg/user.svg';
import Eye from '../../assets/svg/eye.svg';
import EyeClosed from '../../assets/svg/eye_closed.svg';
import styles from './LoginPage.style';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import ErrorValidation from '../../components/ErrorValidation';
import Config from 'react-native-config';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setSignIn} from '../../../store/authSlice';

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [onError, setOnError] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [userError, setUserError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkVisible = () => {
    setOnError(!onError);
    setPasswordError(null);
    setUserError(null);
  };

  const loginFunc = async props => {
    try {
      const response = await axios.post(
        `http://${Config.IP}/users/login`,
        props.values,
      );
      if (response.data.status === 200) {
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
      } else if (response.data.status === 400) {
        setOnError(true);
        setPasswordError('Girdiğiniz şifre hatalı !');
      } else {
        setOnError(true);
        setUserError('Kullanıcı bulunamadı !');
      }
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const handleIcon = () => {
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

      <ErrorValidation
        visible={onError}
        close={checkVisible}
        emailError={userError}
        passwordError={passwordError}
      />

      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../assets/nermin_login.png')}
        />
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => loginFunc({values})}>
          {({handleChange, handleSubmit, values}) => (
            <>
              <AuthInput
                placeholder={'E-mailiniz'}
                secureTextEntry={false}
                onChangeText={handleChange('email')}
                icon={<User width={30} height={30} fill={'#fff'} />}
              />
              <AuthInput
                placeholder={'Şifreniz'}
                icon={
                  visible ? (
                    <Eye width={40} height={40} fill={'#fff'} />
                  ) : (
                    <EyeClosed width={40} height={40} fill={'#fff'} />
                  )
                }
                secureTextEntry={!visible ? true : false}
                onChangeText={handleChange('password')}
                onIconPress={handleIcon}
              />
              <AuthButton text="Giriş Yap" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <View style={styles.sign_container}>
          <TouchableOpacity
            style={styles.signin}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signin_text}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signin_google}>
            <Image
              style={styles.google_img}
              source={require('../../assets/google.png')}
            />
            <Text style={styles.signin_text_google}>Google ile kayıt ol</Text>
            <Image style={styles.google_img} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
