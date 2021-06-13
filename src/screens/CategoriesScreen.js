import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';

function CategoriesScreen(props) {
  const renderItem = itemData => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() =>
          props.navigation.navigate('CategoryMeals', {
            itemId: itemData.item.id,
            title: itemData.item.title,
          })
        }
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export default CategoriesScreen;
