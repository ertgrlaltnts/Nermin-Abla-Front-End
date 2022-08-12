import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import styles from './TellingPage.style';

const TellingPage = ({navigation, route}) => {
  const {content, fortuneTeller, _id} = route.params;

  useEffect(() => {
    axios.post(`http://${Config.IP}/fortunes/visible`, {
      _id: _id,
    });
  }, [_id]);

  const deleteFortune = async () => {
    await axios.post(`http://${Config.IP}/fortunes/delete`, {_id: _id});
    navigation.navigate('Inbox');
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={
            fortuneTeller === 1
              ? require('../../assets/nermin-abla-1.png')
              : fortuneTeller === 2
              ? require('../../assets/small_belkiz.png')
              : require('../../assets/small_men.png')
          }
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.title}>Kahve Falı</Text>
        <Text style={styles.text}>{content}</Text>
        <TouchableOpacity onPress={deleteFortune}>
          <View style={styles.delete_button}>
            <Text style={styles.delete_text}>Sil</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TellingPage;
