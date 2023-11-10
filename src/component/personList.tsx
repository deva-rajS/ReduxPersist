// src/components/PersonList.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectPersons,
  deletePerson,
  editPerson,
  setEditingPerson,
} from '../features/personSlice';
import Cards from './Cards';

const PersonList = ({navigation}) => {
  const dispatch = useDispatch();
  const persons = useSelector(selectPersons);
  const handleEdit = (id, newName, newAge) => {
    navigation.navigate('Home');
    dispatch(editPerson({id, name: newName, age: newAge}));
    dispatch(setEditingPerson({id, name: newName, age: newAge}));
  };

  const handleDelete = id => {
    dispatch(deletePerson(id));
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>Person List</Text>
      {persons.map(person => (
        <Cards
          name={person.name}
          age={person.age}
          onDelete={() => handleDelete(person.id)}
          onEdit={() => handleEdit(person.id, person.name, person.age)}
        />
      ))}
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
export default PersonList;
