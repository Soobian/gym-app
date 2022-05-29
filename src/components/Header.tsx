import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, GRADIENTS } from '../constants/colors';

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header = ({title, children}: HeaderProps) => {
  const window = useWindowDimensions();
  
  return (
    <View style={[styles.container, {width: window.width}]}>
      <LinearGradient
        style={[styles.borderContainer, {paddingHorizontal: window.width * 0.1}]}
        colors={GRADIENTS.gradientOne}
        start={{x: 0.5, y: 0.1}}
        end={{x: 0.5, y: 1}}
      >
        <>{children}</>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
  },
  borderContainer: {
    borderBottomRightRadius: 40,
    paddingTop: 70,
    paddingBottom: 40,
  },
  text: {
    fontSize: 35,
    color: COLORS.headerTextColor,
  }
})