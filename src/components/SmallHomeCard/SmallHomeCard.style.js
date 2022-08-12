import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    flex: 1,
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },

  linearGradient: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  text: {
    flex: 1.8,
    fontSize: 16,
    color: '#fff',
  },
});
