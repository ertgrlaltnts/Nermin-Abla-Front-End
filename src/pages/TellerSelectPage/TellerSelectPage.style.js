import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    padding: 10,
    backgroundColor: '#181A1F',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height / 2.8,
    borderRadius: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },

  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  middle: {
    alignItems: 'center',
  },

  lottie: {
    width: 150,
    height: 150,
  },

  enough: {
    color: '#ffc200',
    fontSize: 18,
    fontWeight: 'bold',
  },

  pay: {
    backgroundColor: '#ffc200',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  pay_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
