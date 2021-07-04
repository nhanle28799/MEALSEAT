import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
export default function FilterScreen(props) {
  const {navigation, route} = props;
  const [isGluten, setIsGluten] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const appliedFilters = useCallback(
    {
      glutenFree: isGluten,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    },
    [(isGluten, isLactoseFree, isVegan, isVegetarian)],
  );

  useEffect(() => {
    navigation.setParams({save: appliedFilters});
  }, [appliedFilters]);
  const FilterSwitch = props => {
    return (
      <View style={styles.switchcontainer}>
        <Text style={styles.titlename}>{props.label}</Text>
        <Switch value={props.value} onValueChange={props.onChage} />
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avalable Filters/ Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        value={isGluten}
        onChage={newValue => setIsGluten(newValue)}
      />
      <FilterSwitch
        label="Lactose Free"
        value={isLactoseFree}
        onChage={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChage={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChage={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, marginHorizontal: 87},
  title: {fontWeight: 'bold', fontSize: 20, marginTop: 10, alignSelf: 'center'},
  switchcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  titlename: {
    fontWeight: 'bold',
  },
});
