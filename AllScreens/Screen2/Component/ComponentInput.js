import React from 'react';
import {Image, TextInput} from 'react-native';

const ComponentInput = (props) => {
  const {style, placeholder, imageStyle, imageSource, value, onChangeText, secureTextEntry} = props;

  return (
    <>
      <TextInput
      style={style} 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      />
      <Image style={imageStyle} source={imageSource} />
    </>
  );
};

export default ComponentInput;
