import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../constants/colors';
import { SHADOWS } from '../constants/shadows';
import { LinearGradient } from 'expo-linear-gradient';

interface AuthFooterProps {
  isLogin: boolean;
}

const SocialButton = ({iconSource, onPress}: {iconSource?: string, onPress?: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[stylesSocialButton.container, SHADOWS]}
        colors={[COLORS.gradientOneTopColor, COLORS.gradientOneBottomColor]}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
      >
      <Image
        style={stylesSocialButton.icon} 
        source={{uri: iconSource}}/>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const AuthFooter = ({isLogin}: AuthFooterProps) => {
  const navigation = useNavigation();

  const useGoogleAuth = () => {
    console.log("Google Auth");
  }

  const useFacebookAuth = () => {
    console.log("Facebook Auth");
  }

  const useAppleAuth = () => {
    console.log("Apple Auth");
  }

  return (
    <View style={styles.container}>
      <Text>Connect with your social account</Text>
      <View style={styles.socialContainer}>
        <SocialButton iconSource='https://img.icons8.com/ios/50/000000/google-logo--v1.png' onPress={useGoogleAuth}/>
        <SocialButton iconSource='https://img.icons8.com/ios/50/000000/facebook-f.png' onPress={useFacebookAuth}/>
        <SocialButton iconSource='https://img.icons8.com/ios/50/000000/mac-os--v1.png'onPress={useAppleAuth}/>
      </View>
      <Text>{isLogin ? 'Don\'t have an account?' : 'Have an account?'}</Text>
      <TouchableOpacity>
        <Text>{isLogin ? 'Get started' : 'Log in'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthFooter

const stylesSocialButton = StyleSheet.create({
  container: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon : {
    width: 30,
    aspectRatio: 1,
    tintColor: 'white',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
  }
})