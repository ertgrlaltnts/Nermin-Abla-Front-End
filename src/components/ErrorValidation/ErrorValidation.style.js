import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  modalView: {
    padding: 10,
    backgroundColor: '#EFC538',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height / 2.8,
    borderRadius: 10,
  },

  modalText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },

  lottie: {
    width: 130,
    height: 130,
    alignSelf: 'center',
  },

  errors: {
    marginTop: 15,
  },

  close: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
