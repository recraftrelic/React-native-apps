import React from 'react';
import {TouchableHighlight} from 'react-native';
import {View, Text, Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {styles} from './MainScreenStylesheet';
export default function Example(props) {
  const [items, setItems] = React.useState([
    {name: 'Screen 1', code: '#4287f5', img: require('../../images/logo1.png')},
    {name: 'Screen 2', code: '#4287f5', img: require('../../images/logo2.png')},
    {name: 'Screen 3', code: '#4287f5', img: require('../../images/logo3.png')},
    {name: 'Screen 4', code: '#4287f5', img: require('../../images/logo4.png')},
    {name: 'Screen 5', code: '#4287f5', img: require('../../images/logo5.png')},
    {name: 'Screen 6', code: '#4287f5', img: require('../../images/logo6.png')},
    {name: 'Screen 7', code: '#4287f5', img: require('../../images/logo7.png')},
    {name: 'Screen 8', code: '#4287f5', img: require('../../images/logo8.png')},
    {name: 'Screen 9', code: '#4287f5', img: require('../../images/logo9.png')},
    {
      name: 'Screen 10',
      code: '#4287f5',
      img: require('../../images/logo10.png'),
    },
  ]);
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({item, index}) => (
        <TouchableHighlight
          underLayer="white"
          onPress={() => {
            props.navigation.navigate(`screen${index + 1}`);
          }}>
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image style={styles.itemCode} source={item.img} />
          </View>
        </TouchableHighlight>
      )}
    />
  );
}
