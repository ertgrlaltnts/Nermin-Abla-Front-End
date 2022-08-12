import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import styles from './ImagePickPage.style';

const ImagePickPage = ({navigation}) => {
  const defaultImage =
    'https://w7.pngwing.com/pngs/468/501/png-transparent-graphy-grapher-camera-icon-studio-camera-lens-photography.png';
  const [imageUri1, setImageUri1] = useState(defaultImage);

  const [imageUri2, setImageUri2] = useState(defaultImage);

  const [imageUri3, setImageUri3] = useState(defaultImage);

  const onCancel1 = () => {
    setImageUri1(
      'https://w7.pngwing.com/pngs/468/501/png-transparent-graphy-grapher-camera-icon-studio-camera-lens-photography.png',
    );
  };

  const onCancel2 = () => {
    setImageUri2(
      'https://w7.pngwing.com/pngs/468/501/png-transparent-graphy-grapher-camera-icon-studio-camera-lens-photography.png',
    );
  };

  const onCancel3 = () => {
    setImageUri3(
      'https://w7.pngwing.com/pngs/468/501/png-transparent-graphy-grapher-camera-icon-studio-camera-lens-photography.png',
    );
  };

  const takePhoto1 = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, res => {
      setImageUri1(res.assets[0].uri);
    });
  };

  const takePhoto2 = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, res => {
      setImageUri2(res.assets[0].uri);
    });
  };

  const takePhoto3 = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, res => {
      setImageUri3(res.assets[0].uri);
    });
  };

  const nextPage = () => {
    navigation.navigate('TellerSelect', {
      imageUri1: imageUri1,
      imageUri2: imageUri2,
      imageUri3: imageUri3,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fincan Fotoğraflarını Yükle</Text>
      <View style={styles.pickerBoxes}>
        <View style={styles.photo_container}>
          <TouchableWithoutFeedback onPress={takePhoto1}>
            <Image source={{uri: `${imageUri1}`}} style={styles.image} />
          </TouchableWithoutFeedback>
          {imageUri1 !== defaultImage ? (
            <TouchableWithoutFeedback onPress={onCancel1}>
              <Text style={styles.cancel}> X </Text>
            </TouchableWithoutFeedback>
          ) : (
            <View />
          )}
        </View>
        <View>
          <TouchableWithoutFeedback onPress={takePhoto2}>
            <Image source={{uri: `${imageUri2}`}} style={styles.image} />
          </TouchableWithoutFeedback>
          {imageUri2 !== defaultImage ? (
            <TouchableWithoutFeedback onPress={onCancel2}>
              <Text style={styles.cancel}> X </Text>
            </TouchableWithoutFeedback>
          ) : (
            <View />
          )}
        </View>
        <View>
          <TouchableWithoutFeedback onPress={takePhoto3}>
            <Image source={{uri: `${imageUri3}`}} style={styles.image} />
          </TouchableWithoutFeedback>
          {imageUri3 !== defaultImage ? (
            <TouchableWithoutFeedback onPress={onCancel3}>
              <Text style={styles.cancel}> X </Text>
            </TouchableWithoutFeedback>
          ) : (
            <View />
          )}
        </View>
      </View>
      {
        (imageUri1,
        imageUri2,
        imageUri3 !== defaultImage && (
          <TouchableOpacity onPress={nextPage}>
            <View style={styles.continue}>
              <Text style={styles.continue_text}>Devam Et</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

export default ImagePickPage;
