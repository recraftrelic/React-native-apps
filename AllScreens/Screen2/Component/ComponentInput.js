import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, TextInput} from 'react-native';

const ComponentInput = (props) => {
  const {style, placeholder, imageStyle, imageSource, value, onChangeText, secureTextEntry} = props;

  return (
    <>
    <TouchableOpacity>
      <TextInput
      style={style} 
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

export default ComponentInput;
