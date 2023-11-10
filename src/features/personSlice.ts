// src/features/personSlice.js

import {createSlice} from '@reduxjs/toolkit';

const personSlice = createSlice({
  name: 'person',
  initialState: {
    persons: [],
    editingPerson: null,
  },
  reducers: {
    addPerson: (state, action) => {
      state.persons.push(action.payload);
    },
    editPerson: (state, action) => {
      const {id, name, age} = action.payload;
      state.persons = state.persons.map(person =>
        person.id === id ? {...person, name, age} : person,
      );
      state.editingPerson = null;
    },
    deletePerson: (state, action) => {
      state.persons = state.persons.filter(
        person => person.id !== action.payload,
      );
    },
    setEditingPerson: (state, action) => {
      state.editingPerson = action.payload;
    },
  },
});

export const {addPerson, editPerson, deletePerson, setEditingPerson} =
  personSlice.actions;
export const selectPersons = state => state.person.persons;
export const selectEditingPerson = state => state.person.editingPerson;
export default personSlice.reducer;
