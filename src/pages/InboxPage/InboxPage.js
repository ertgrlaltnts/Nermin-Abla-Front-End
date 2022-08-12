import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './InboxPage.style';
import Empty from '../../components/Empty';
import Config from 'react-native-config';
import ResponseBox from '../../components/ResponseBox';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {CheckResponse} from '../../../store/fortuneSlice';

const InboxPage = ({navigation}) => {
  const [response, setResponse] = useState([]);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) {
      const fetchData = async () => {
        const responses = await axios.get(
          `http://${Config.IP}/fortunes/responses`,
        );
        setResponse(responses.data.listResponse.reverse());
        dispatch(CheckResponse());
      };
      fetchData();
    }
  }, [isFocused, dispatch]);

  const handleResponseBox = async item => {
    return navigation.navigate('Telling', {
      _id: item._id,
      date: item.createdAt,
      content: item.fortuneResponse,
      fortuneTeller: item.fortune,
    });
  };

  const renderItem = ({item}) => (
    <ResponseBox
      date={item.createdAt}
      isVisible={item.visible}
      onPress={() => handleResponseBox(item)}
    />
  );
  return (
    <View style={styles.container}>
      {!response.length ? (
        <Empty />
      ) : (
        <View>
          <Text style={styles.title}>Gelen Kutusu</Text>
          <FlatList data={response} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
};

export default InboxPage;
