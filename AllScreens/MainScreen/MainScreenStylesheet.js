import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  containers: {
    margin: 15,
    marginLeft: 0,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 30,
    marginLeft: 25,
    marginTop: 5,
    opacity: 30,
    borderColor: 'black',
  },
  screen1: {
    backgroundColor: '#4287f5',
    paddingBottom: 40,
    paddingRight: 150,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  screen2: {
    backgroundColor: '#4287f5',
    paddingBottom: 40,
    paddingRight: 130,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: '#0a0a0a',
    fontSize: 30,
    left: 25,
    top: 20,
  },
});
