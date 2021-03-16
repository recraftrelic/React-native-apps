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
    onChangeText,
    value,
    secureTextEntry

  } = props;
  console.log(value)
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
      <View style={viewStyle}></View>
    </>
  );
};

export default CommonInput;
