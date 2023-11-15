// DetailedCard.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
const DetailedCard = ({person, onClose}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FontAwesomeIcon icon={faUser} size={130} style={styles.fA} />
      </View>
      <Text style={styles.text}>Name: {person.name}</Text>
      <Text style={styles.text}>Age: {person.age}</Text>
      {/* Add more details as needed */}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.btnText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 2,
    position: 'absolute',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 55,
    width: '90%',
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  cardContainer: {
    marginHorizontal: 8,
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 20,
  },
  cardDetails: {},
  fA: {color: 'darkgray'},
  btnContainer: {
    alignItems: 'flex-end',
  },
  closeButton: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: '#5298fa',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  text: {
    fontWeight: '500',
  },
  btnText: {
    color: 'white',
  },
});

export default DetailedCard;
