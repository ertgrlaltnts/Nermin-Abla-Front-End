import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  changeProfileImg,
  selectHoroscope,
  selectLastName,
  selectProfileImg,
  selectUserName,
  setSignOut,
} from '../../../store/authSlice';
import {launchCamera} from 'react-native-image-picker';
import axios from 'axios';
import Config from 'react-native-config';
import Gold50 from '../../assets/svg/50-gold.svg';
import LogOut from '../../assets/svg/logout.svg';
import styles from './ProfilePage.style';

const ProfilePage = ({navigation}) => {
  const [image, setImage] = useState(profileImg);
  const username = useSelector(selectUserName);
  const lastName = useSelector(selectLastName);
  const horoscope = useSelector(selectHoroscope);
  const profileImg = useSelector(selectProfileImg);
  const dispatch = useDispatch();
  const onSignOut = async () => {
    await axios.get(`http://${Config.IP}/users/logout`);
    dispatch(setSignOut());
  };
  const nameOne = username.substring(0, 1).toUpperCase();
  const lastNameOne = lastName.substring(0, 1).toUpperCase();
  console.log(image);
  const takePhoto = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, res => {
      setImage(res.assets[0].uri);
      const database = async () => {
        await axios.post(`http://${Config.IP}/users/photo`, {
          profileImg: res.assets[0].uri,
        });
      };
      database();
      dispatch(changeProfileImg(res.assets[0].uri));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile_card}>
        <TouchableWithoutFeedback onPress={takePhoto}>
          {profileImg === null ? (
            <Text style={styles.profile_img}>{nameOne + lastNameOne}</Text>
          ) : (
            <Image style={styles.image} source={{uri: `${image}`}} />
          )}
        </TouchableWithoutFeedback>
        <Text style={styles.profile_text}>{username}</Text>
        <Text style={styles.profile_text}>{horoscope}</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('AddGold')}>
        <View style={styles.gold}>
          <Gold50 width={50} height={50} />
          <Text style={styles.gold_text}>Gold satın al !</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={onSignOut}>
        <View style={styles.exit}>
          <LogOut width={30} height={30} fill={'#fff'} />
          <Text style={styles.exit_text}>Çıkış Yap</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
