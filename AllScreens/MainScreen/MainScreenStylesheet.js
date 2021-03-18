import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    left: 50,
    position: 'absolute',
  },
  itemCode: {
    height: 75,
    width: 75,
    borderRadius: 10,
    left: 42,
    bottom: 35,
  },
});
