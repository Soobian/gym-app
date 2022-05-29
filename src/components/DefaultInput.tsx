import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  useWindowDimensions,
} from 'react-native'
import React from 'react'

import { SHADOWS } from '../constants/shadows';
import { COLORS } from '../constants/colors';

interface InputProps {
  name: string;
  isPassword: boolean;
  value: string;
  setFunction: (value: string) => void;
}

const DefaultInput = ({name, isPassword, value, setFunction}: InputProps) => {
  const window = useWindowDimensions();

  return (
    <View style={[styles.input__container, {width: window.width, paddingHorizontal: window.width * 0.1}]}>
      <Text style={styles.input__name}>{name}</Text>
      <TextInput
        style={[styles.input__textinput, SHADOWS, {width: window.width * 0.8}]}
        onChangeText={setFunction}
        value={value}
        secureTextEntry={isPassword}
      />
    </View>
  )
}

export default DefaultInput

const styles = StyleSheet.create({
  input__container: {
    display: "flex",
    paddingVertical: 15,
    flexDirection: 'column',
  },
  input__name: {
    marginLeft: 20,
    marginBottom: 5,
    lineHeight: 20,
    height: 20,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  input__textinput: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: 'white',
  }
})