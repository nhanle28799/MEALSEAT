import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {cos} from 'react-native-reanimated';
import {CATEGORIES, MEALS} from '../../data/dummy-data';
import MealsList from '../components/MealsList';

export default function CategoryMealsScreen(props) {
  const route = useRoute();

  const listMeal = MEALS.filter(
    meal => meal.categoryIds.indexOf(route.params.itemId) >= 0,
  );
  return <MealsList listMeal={listMeal} navigation={props.navigation} />;
}

const styles = StyleSheet.create({});
