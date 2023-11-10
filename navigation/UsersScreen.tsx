// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import PersonList from '../src/component/personList';

function UsersScreen({navigation}) {
  return (
    <View>
      <PersonList navigation={navigation} />
    </View>
  );
}

export default UsersScreen;
