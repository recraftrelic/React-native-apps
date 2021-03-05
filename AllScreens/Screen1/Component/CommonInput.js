import React from 'react';
import {TextInput, Image, View} from 'react-native';

const CommonInput = (props) => {
  const {
    style,
    placeholderTextColor,
    placeholder,
    imageStyle,
    imageSource,
    viewStyle,
  } = props;
  return (
    <>
      <TextInput
        style={style}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
      <Image style={imageStyle} source={imageSource} />
      <View style={viewStyle}></View>
    </>
  );
};

export default CommonInput;
