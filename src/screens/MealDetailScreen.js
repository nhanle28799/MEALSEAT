import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MEALS} from '../../data/dummy-data';
import Icon from 'react-native-vector-icons/AntDesign';
export default function MealDetailScreen(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const selectItem = MEALS.find(meal => meal.id === route.params.mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectItem.title}</Text>
      <Text>{selectItem.duration}</Text>
      <Icon size={24} color="black" name="star" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
