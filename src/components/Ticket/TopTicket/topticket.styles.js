import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    height: '90%',
    margin: 10,
    borderRadius: 6,
  },
  box: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  name: {
    fontWeight: '500',
    fontSize: 14,
  },
  mall: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: '5%',
    marginTop: 9,
  },
  border: {
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    height: 1,
    borderWidth: 0.5,
    margin: 10,
  },
});
