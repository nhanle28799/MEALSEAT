import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function MealItem(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={styles.containertitle}>
            <ImageBackground source={{uri: props.image}} style={styles.image}>
              <View style={styles.grouptitle}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerdetail}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#f5f5f5',
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  containertitle: {height: '85%'},
  containerdetail: {
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  grouptitle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
