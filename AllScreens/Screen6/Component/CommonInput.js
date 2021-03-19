import React from 'react';
import {Image, TextInput} from 'react-native';

const CommonInput = (props) => {
  const {
    style,
    placeholderTextColor,
    placeholder,
    imageStyle,
    imageSource,
    value,
    onChangeText,
    secureTextEntry,
  } = props;

  return (
    <>
      <TextInput
        style={style}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Image style={imageStyle} source={imageSource} />
    </>
  );
};

export default CommonInput;
