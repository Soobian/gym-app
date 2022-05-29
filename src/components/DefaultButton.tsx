import { 
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, { FunctionComponent, MouseEventHandler } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS } from '../constants/colors'

interface DefaultButtonProps {
  title: string;
  onPress: () => void;
}

const DefaultButton = ({ title, onPress }: DefaultButtonProps) => {
  const window = useWindowDimensions();

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[styles.container, {width: window.width * 0.8}]}
        colors={[COLORS.gradientOneTopColor, COLORS.gradientOneBottomColor]}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
      >
        <Text style={ styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default DefaultButton

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
})