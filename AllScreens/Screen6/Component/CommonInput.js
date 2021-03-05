import React from 'react';
import {Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CommonInput = (props) => {
  const {
    style,
    placeholderTextColor,
    placeholder,
    imageStyle,
    imageSource,
  } = props;

  return (
    <>
      <TextInput
        style={style}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
      <Image style={imageStyle} source={imageSource} />
      <TextInput
        style={imageStyle}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </>
  );
};

export default CommonInput;
