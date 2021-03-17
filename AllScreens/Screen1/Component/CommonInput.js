import React from 'react';
import {TextInput, Image, TouchableOpacity} from 'react-native';

const CommonInput = ({
  style,
  placeholderTextColor,
  placeholder,
  imageStyle,
  imageSource,
  onChangeText,
  value,
  secureTextEntry,
}) => {
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
