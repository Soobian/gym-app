import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
import Header from '../../components/Header';
import AuthFooter from '../../components/AuthFooter';

import { COLORS } from '../../constants/colors';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login");
  }

  return (
    <View style={styles.container}>
      <Header title="Welcome back!"/>
      <View style={styles.formContainer}>
        <DefaultInput name="Email" isPassword={false} placeholder="email@domain.com" value={username} setFunction={setUsername}/>
        <DefaultInput name="Password" isPassword={true} value={password} setFunction={setPassword}/>
        <View style={{paddingVertical: 15, marginTop: 25}}>
          <DefaultButton title="Log In" onPress={handleLogin}/>
        </View>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <AuthFooter isLogin/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})