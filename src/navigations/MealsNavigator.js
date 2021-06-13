import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Color from '../../constants/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function MealsNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({navigation, route}) => ({
            headerTitle: route.params.title,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: 'white',
          })}
        />
        <Stack.Screen
          name="MealsDetail"
          component={MealDetailScreen}
          options={({navigation, route}) => ({
            headerTitle: route.params.title,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: 'white',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
