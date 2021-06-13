import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

export default function CategoryGridItem(props) {
  return (
    <View style={styles.itemRender}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  itemRender: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    height: 150,
    margin: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
  },
});
