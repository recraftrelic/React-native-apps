import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CommonInput = (props) => {
  const {
    imageStyle,
    placeholderTextColor,
    placeholder,
    imageChild,
    value,
    onChangeText,
    secureTextEntry,
  } = props;

  return (
    <>
      <TextInput
        style={imageStyle}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <View viewStyle={imageChild} />
    </>
  );
};

export default CommonInput;
