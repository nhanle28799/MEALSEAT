import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../../data/dummy-data';
import MealsList from '../components/MealsList';

export default function FavoritesScreen(props) {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealsList listMeal={favMeals} navigation={props.navigation} />;
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
