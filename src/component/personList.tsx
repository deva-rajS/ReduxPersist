// src/components/PersonList.js

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectPersons,
  deletePerson,
  editPerson,
  setEditingPerson,
} from '../features/personSlice';
import Cards from './Cards';
import DetailedCard from './DetailedCard';

const PersonList = ({navigation}) => {
  const dispatch = useDispatch();
  const persons = useSelector(selectPersons);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const handleEdit = (id, newName, newAge) => {
    navigation.navigate('Home');
    dispatch(editPerson({id, name: newName, age: newAge}));
    dispatch(setEditingPerson({id, name: newName, age: newAge}));
  };

  const handleDelete = id => {
    dispatch(deletePerson(id));
  };

  const handleCardClick = person => {
    if (!selectedPerson) {
      setSelectedPerson(person);
    }
  };

  const handleDetailedCardClose = () => {
    setSelectedPerson(null);
  };

  const handleTouchablePress = event => {
    const isDetailedCard = event.target === event.currentTarget;
    if (isDetailedCard) {
      handleDetailedCardClose();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Person List</Text>
        {persons.map(person => (
          <Cards
            name={person.name}
            age={person.age}
            onDelete={() => handleDelete(person.id)}
            onEdit={() => handleEdit(person.id, person.name, person.age)}
            onClick={() => handleCardClick(person)}
          />
        ))}
      </View>

      {selectedPerson && (
        <TouchableWithoutFeedback onPress={handleTouchablePress}>
          <View style={styles.detailedCard}>
            <DetailedCard
              person={selectedPerson}
              onClose={handleDetailedCardClose}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'column',
    gap: 10,
    height: '100%',
  },
  detailedCard: {
    height: '100%',
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 10,
  },
});
export default PersonList;
