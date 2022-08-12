import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
    paddingHorizontal: 10,
  },

  image: {
    width: 130,
    height: 130,
  },

  top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  name: {
    color: '#fff',
    fontSize: 30,
  },

  subtitle: {
    color: '#fff',
    fontSize: 17,
  },

  loading: {
    flex: 1,
    backgroundColor: '#181A1F',
  },
});
