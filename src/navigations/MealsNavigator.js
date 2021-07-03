import React from 'react';
import {StyleSheet, Text, View, Button, ColorPropType} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Color from '../../constants/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import {createAppContainer} from 'react-navigation';
import {color} from 'react-native-reanimated';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FilterScreen from '../screens/FilterScreen';

const Stack = createStackNavigator();

const MealsNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({navigation, route}) => ({
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.primary,
          },
          headerTintColor: 'white',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              styles={styles.rightButton}>
              <Text style={styles.textbtn}>=</Text>
            </TouchableOpacity>
          ),
        })}
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
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Favorite')}
              styles={styles.rightButton}>
              <Text style={styles.textbtn}>+</Text>
            </TouchableOpacity>
          ),
          headerTintColor: 'white',
        })}
      />
    </Stack.Navigator>
  );
};

const FavScreen = props => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={({navigation, route}) => ({
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.primary,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTintColor: 'white',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              styles={styles.rightButton}>
              <Text style={styles.textbtn}>=</Text>
            </TouchableOpacity>
          ),
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
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Favorite')}
              styles={styles.rightButton}>
              <Text style={styles.textbtn}>+</Text>
            </TouchableOpacity>
          ),
          headerTintColor: 'white',
        })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const MealsTabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Color.accent,
      }}>
      <Tab.Screen
        name="Home"
        component={MealsNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Text style={{...styles.mealsBtn, color: color}}>+</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite Food"
        component={FavScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Text style={{...styles.mealsBtn, color: color}}>-</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const drawernav = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Favorite" component={MealsTabNavigator} />
        <Drawer.Screen name="Filter" component={FilterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default drawernav;

const styles = StyleSheet.create({
  textbtn: {
    fontSize: 40,
    color: 'white',
  },
  mealsBtn: {
    fontSize: 30,
  },
  drawicon: {
    fontSize: 20,
    color: 'white',
  },
});
