import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [currentGoals, setCurrentGoals] = useState([]);

  const addGoal = goalTitle => {
    setCurrentGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={currentGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
