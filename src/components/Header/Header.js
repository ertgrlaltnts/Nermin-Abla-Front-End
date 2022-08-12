import React from 'react';
import {View, Image} from 'react-native';
import styles from './Header.style';

const Header = ({onPress}) => {
  return (
    <View style={styles.header_container}>
      <Image
        style={styles.header_logo}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

export default Header;
