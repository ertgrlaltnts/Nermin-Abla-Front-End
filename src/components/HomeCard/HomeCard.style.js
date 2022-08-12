import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#262A34',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  image: {
    flex: 1,
    width: 130,
    height: 130,
  },

  text: {
    flex: 1.5,
    color: '#fff',
    fontSize: 16,
  },
});
