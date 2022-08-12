import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 30,
    backgroundColor: '#652A6C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
  },

  value: {
    color: '#ffc200',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buy_button: {
    backgroundColor: '#ffc200',
    padding: 10,
    borderRadius: 10,
  },

  buy_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
