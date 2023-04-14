import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
  },
  text2: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',
  },
  time: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  type: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 10,
    color: 'grey',
  },
});
