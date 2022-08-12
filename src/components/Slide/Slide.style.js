import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  slide: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  linearGradient: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },

  text_container: {
    flex: 1,
    backgroundColor: '#262A34',
    padding: 10,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 350,
  },

  fortune_text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  select_button: {
    backgroundColor: '#652A6C',
    width: Dimensions.get('screen').width / 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
  },
  select_text: {
    color: '#fff',
    fontSize: 20,
  },

  online: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  dot: {
    marginTop: 5,
  },

  gold_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  gold_text: {
    color: '#ffc200',
    fontWeight: 'bold',
    fontSize: 18,
  },

  empty_box: {
    width: 40,
  },
});
