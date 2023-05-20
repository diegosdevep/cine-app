import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    position: 'relative',
    alignSelf: 'center',
    marginTop: 130,
    marginHorizontal: 10,
    width: '90%',
    height: 130,
    padding: 10,
    borderRadius: 6,
  },
  flexRSB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  upTitle: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '500',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    marginTop: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 8,
  },
  containerBook: {
    backgroundColor: '#1876D2',
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  book: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
  },
});
