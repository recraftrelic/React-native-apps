import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, TextInput} from 'react-native';

const ComponentInput = (props) => {
  const {
    style,
    placeholder,
    imageStyle,
    imageSource,
    value,
    onChangeText,
    secureTextEntry,
  } = props;

  return (
    <React.Fragment>
      <TextInput
        style={style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Image style={imageStyle} source={imageSource} />
    </React.Fragment>
  );
};

export default ComponentInput;
