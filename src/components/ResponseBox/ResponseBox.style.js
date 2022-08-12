import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#262A34',
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 40,
    height: 40,
  },

  text: {
    color: '#fff',
    fontSize: 14,
  },

  visible: {
    width: 15,
    height: 15,
    backgroundColor: '#17D300',
    borderRadius: 20,
  },
});
