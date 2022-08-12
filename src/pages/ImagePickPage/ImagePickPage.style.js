import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },

  pickerBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  pickerBox: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    color: '#fff',
    fontSize: 18,
  },

  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  photo_container: {
    position: 'relative',
  },

  cancel: {
    color: '#fff',
    textAlign: 'center',
    borderRadius: 30,
    fontWeight: 'bold',
    backgroundColor: '#ff0000',
    position: 'absolute',
    bottom: -5,
    right: -5,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },

  continue: {
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#652A6C',
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2,
  },

  continue_text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
