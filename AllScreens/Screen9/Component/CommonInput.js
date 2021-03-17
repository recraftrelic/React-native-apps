import React from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
//import {TextInput} from 'react-native-gesture-handler';

const CommonInput = (props) => {
  const {
    style,
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
        style={style}
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
