import {StyleSheet, Dimensions} from 'react-native';

const getWidth = Dimensions.get('screen').width;
const getHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#181A1F',
    flex: 1,
  },

  image_container: {
    marginTop: 10,
  },

  image: {
    width: getWidth / 2,
    height: getHeight / 3,
    alignSelf: 'center',
  },

  sign_container: {
    marginTop: 80,
  },

  signin: {
    alignItems: 'center',
    backgroundColor: '#262A34',
    padding: 18,
    marginHorizontal: 25,
    borderRadius: 10,
  },

  signin_google: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  signin_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  signin_text_google: {color: '#000', fontWeight: 'bold', fontSize: 16},

  google_img: {
    width: 35,
    height: 35,
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
});
