import React from 'react';
import {Image, TextInput} from 'react-native';

const ComponentInput = (props) => {
  const {style, placeholder, imageStyle, imageSource} = props;

  return (
    <>
      <TextInput style={style} placeholder={placeholder} />
      <Image style={imageStyle} source={imageSource} />
    </>
  );
};

export default ComponentInput;
