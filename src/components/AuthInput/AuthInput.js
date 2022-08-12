import React from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './AuthInput.style';

const AuthInput = ({
  placeholder,
  onChangeText,
  value,
  icon,
  secureTextEntry,
  onIconPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input_style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#4A4C54"
        secureTextEntry={secureTextEntry}
        passwordRules={true}
      />
      <TouchableWithoutFeedback onPress={onIconPress}>
        <View>{icon}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AuthInput;
