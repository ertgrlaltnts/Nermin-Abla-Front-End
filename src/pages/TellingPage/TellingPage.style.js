import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#181A1F',
    flex: 1,
  },

  image: {
    marginTop: 10,
    height: 300,
    width: 200,
    alignSelf: 'center',
  },

  text_container: {
    padding: 15,
    backgroundColor: '#262A34',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },

  text: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
  },

  delete_button: {
    backgroundColor: '#E11515',
    alignItems: 'center',
    borderRadius: 10,
  },

  delete_text: {
    color: '#fff',
    fontSize: 22,
  },
});
