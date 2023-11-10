import * as React from 'react';
import {View, Text} from 'react-native';
import PersonForm from '../src/component/personForm';

function HomeScreen({navigation}) {
  return (
    <View>
      <PersonForm navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
