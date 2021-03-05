import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CommonInput = (props) => {
  const {imageStyle, placeholderTextColor, placeholder, imageChild} = props;

  return (
    <>
      <TextInput
        style={imageStyle}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
      <View viewStyle={imageChild}></View>
    </>
  );
};

export default CommonInput;
