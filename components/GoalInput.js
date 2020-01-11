import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const inputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='create goal'
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <Button title='Add' onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  }
});

export default GoalInput;
