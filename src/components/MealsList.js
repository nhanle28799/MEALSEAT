import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import MealItem from './MealItem';
export default function MealsList(props) {
  const renderMeal = dataItem => {
    return (
      <MealItem
        title={dataItem.item.title}
        duration={dataItem.item.duration}
        complexity={dataItem.item.complexity}
        affordability={dataItem.item.affordability}
        image={dataItem.item.imageUrl}
        onSelect={() =>
          props.navigation.navigate('MealsDetail', {
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
        data={props.listMeal}
        renderItem={renderMeal}
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
