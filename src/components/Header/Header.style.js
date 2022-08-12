import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  header_container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  header_logo: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    resizeMode: 'contain',
  },

  none: {
    width: 20,
    height: 50,
    backgroundColor: '#181A1F',
  },
});
