import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  date: {
    color: 'grey',
    fontSize: 17,
    fontWeight: '500',
  },
  time: {
    marginVertical: 5,
    fontSize: 17,
  },
  img: {
    aspectRatio: 4 / 2,
    height: 60,
    borderRadius: 6,
  },
  border: {
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: '#DCDCDC',
    height: 1,
    marginTop: 10,
    borderWidth: 0.5,
    marginHorizontal: '3%',
  },
});
