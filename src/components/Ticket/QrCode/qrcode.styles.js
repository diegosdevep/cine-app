import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  border: {
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: '#DCDCDC',
    height: 1,
    borderWidth: 0.5,
    margin: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#222831',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 220,
    borderRadius: 4,
    padding: 10,
  },
  textBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
  },
});
