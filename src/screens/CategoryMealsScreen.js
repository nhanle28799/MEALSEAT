import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {cos} from 'react-native-reanimated';
import {CATEGORIES, MEALS} from '../../data/dummy-data';
import MealItem from '../components/MealItem';

export default function CategoryMealsScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();

  const listMeal = MEALS.filter(
    meal => meal.categoryIds.indexOf(route.params.itemId) >= 0,
  );
  const renderItem = dataItem => {
    return (
      <MealItem
        title={dataItem.item.title}
        duration={dataItem.item.duration}
        complexity={dataItem.item.complexity}
        affordability={dataItem.item.affordability}
        image={dataItem.item.imageUrl}
        onSelect={() =>
          navigation.navigate('MealsDetail', {
            mealId: dataItem.item.id,
            title: dataItem.item.title,
          })
        }
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={listMeal}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        style={{marginHorizontal: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
  btn: {backgroundColor: 'lightblue', marginTop: 10},
  textbtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
