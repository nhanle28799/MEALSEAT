import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MEALS} from '../../data/dummy-data';
import Icon from 'react-native-vector-icons/AntDesign';
export default function MealDetailScreen(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const selectItem = MEALS.find(meal => meal.id === route.params.mealId);
  const ListItem = props => {
    return (
      <View style={styles.listitem}>
        <Text style={styles.textitem}>{props.text}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={{uri: selectItem.imageUrl}} style={styles.image} />
        <View style={styles.detail}>
          <Text style={styles.titledetail}>{selectItem.duration}m</Text>
          <Text style={styles.titledetail}>
            {selectItem.complexity.toUpperCase()}
          </Text>
          <Text style={styles.titledetail}>
            {selectItem.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.titletext}>Ingredients</Text>
        {selectItem.ingredients.map(ingredient => (
          <ListItem text={ingredient} />
        ))}
        <Text style={styles.titletext}>Steps</Text>
        {selectItem.steps.map(step => (
          <ListItem text={step} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
  image: {width: '100%', height: 200},
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
    backgroundColor: '#9999',
  },
  titledetail: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  titletext: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  listitem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9999',
  },
  textitem: {
    textAlign: 'center',
    fontSize: 20,
  },
});
