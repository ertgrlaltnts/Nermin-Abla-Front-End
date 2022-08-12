import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#181A1F',
    flex: 1,
    justifyContent: 'center',
  },

  box: {
    height: 10,
  },

  picker: {
    backgroundColor: '#262A34',
    marginHorizontal: 25,
    paddingHorizontal: 15,
    color: '#4A4C54',
    borderRadius: 10,
    marginTop: 20,
  },

  pick_item: {
    color: '#4A4C54',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
