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
      {/* <TextInput
        style={imageStyle}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      /> */}
    </>
  );
};

export default CommonInput;
