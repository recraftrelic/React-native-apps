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
    secureTextEntry,
    TouchableOpacity

  } = props;
  console.log(value)
  return (
    <>
    <TouchableOpacity>
      <TextInput
        style={style}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Image style={imageStyle} source={imageSource} />
      </TouchableOpacity>
    </>
  );
};

export default CommonInput;
