import { SafeAreaView, StyleSheet, Text, View, Dimensions, Platform, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/Login'
import { COLORS, GRADIENTS } from './src/constants/colors'

const {height, width} = Dimensions.get('window');

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 0, backgroundColor: GRADIENTS.gradientOne[0]}}/>
      <SafeAreaView style={[{flex: 1, backgroundColor: COLORS.backgroundColor}]}>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Register" component={Login} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen options={{headerShown: true}} name="Home" component={Login} />
          </Stack.Group>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  safeContainer: {
    flex: 1,
    display: "flex",
    width: width,
  }
});
