import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
  },

  wait_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',

    paddingVertical: 10,
  },

  gradient: {
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },

  wait: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
