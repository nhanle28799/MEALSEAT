import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealsNavigator from './src/navigations/MealsNavigator';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

enableScreens();

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({});
