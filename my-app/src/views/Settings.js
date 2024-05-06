import * as React from 'react';
import { View, Text, StatusBar, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function Screen1({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: 'black',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Text style={{ color: '#fff' }}>Tema Claro</Text>
      <Button
        title="  Cambiar  "
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

function Screen2({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#ecf0f1',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={{ color: '#000' }}>Tema Oscuro</Text>
      <Button
        title="  Cambiar  "
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function SettingsScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


