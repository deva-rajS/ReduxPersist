// src/components/PersonForm.js

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addPerson,
  editPerson,
  selectEditingPerson,
} from '../features/personSlice';

const PersonForm = ({navigation}) => {
  const dispatch = useDispatch();
  const editingPerson = useSelector(selectEditingPerson);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    // If editingPerson is provided, populate the form for editing
    if (editingPerson) {
      setName(editingPerson.name);
      setAge(editingPerson.age.toString());
    }
  }, [editingPerson]);

  const handleNameChange = text => {
    setName(text);
  };

  const handleAgeChange = text => {
    // Ensure that the age is a valid number or an empty string
    setAge(text.replace(/[^0-9]/g, ''));
  };

  const handleAddOrUpdatePerson = () => {
    // Basic validation
    if (!name || !age) {
      alert('Please enter both name and age.');
      return;
    }

    // If editingPerson is provided, dispatch editPerson action
    if (editingPerson) {
      dispatch(
        editPerson({id: editingPerson.id, name, age: parseInt(age, 10)}),
      );
    } else {
      // If editingPerson is not provided, dispatch addPerson action
      dispatch(addPerson({id: Date.now(), name, age: parseInt(age, 10)}));
    }

    // Clear the form after adding or updating
    setName('');
    setAge('');
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        value={name}
        onChangeText={handleNameChange}
      />

      <Text>Age:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        value={age}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
      />

      <Button
        title={editingPerson ? 'Update Person' : 'Add Person'}
        onPress={handleAddOrUpdatePerson}
      />
      <Button title="View Users" onPress={() => navigation.navigate('Users')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 10,
  },
});

export default PersonForm;
