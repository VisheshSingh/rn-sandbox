import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ccc'
  }
});

export default GoalItem;
