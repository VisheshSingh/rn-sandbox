import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const inputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.isVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='create goal'
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '60%'
          }}
        >
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.cancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
