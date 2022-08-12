import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
  },

  success: {
    flex: 1,
  },

  complete: {
    backgroundColor: '#652A6C',
    width: Dimensions.get('screen').width / 2,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 100,
  },
  complete_text: {
    color: '#fff',
    fontSize: 18,
  },
});
