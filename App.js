import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [currentGoals, setCurrentGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addGoal = goalTitle => {
    setCurrentGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setOpenModal(false);
  };

  const removeGoal = goalId => {
    setCurrentGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelHandler = () => {
    setOpenModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add a goal' onPress={() => setOpenModal(true)} />
      <GoalInput
        isVisible={openModal}
        onAddGoal={addGoal}
        cancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={currentGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onPressHandler={removeGoal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
