import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
    paddingHorizontal: 10,
  },

  profile_card: {
    backgroundColor: '#262A34',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
  },

  profile_text: {
    color: '#fff',
    fontSize: 18,
  },

  profile_img: {
    backgroundColor: '#652A6C',
    color: '#fff',
    padding: 25,
    borderRadius: 50,
  },

  gold: {
    backgroundColor: '#ffc200',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  gold_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  exit: {
    backgroundColor: '#652A6C',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 10,
  },

  exit_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
});
