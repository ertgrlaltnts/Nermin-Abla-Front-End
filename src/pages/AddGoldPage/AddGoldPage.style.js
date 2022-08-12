import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
  },

  info: {
    backgroundColor: '#652A6C',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },

  info_text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
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

  modal_middle: {
    marginTop: 20,
    alignItems: 'center',
    height: Dimensions.get('screen').height / 4,
    justifyContent: 'space-between',
  },

  gold_value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffc200',
  },

  gold_button: {
    backgroundColor: '#ffc200',
    width: Dimensions.get('screen').width / 3,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  gold_pay: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
