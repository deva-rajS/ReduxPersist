// src/App.js

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/app/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UsersScreen from './navigation/UsersScreen';
import HomeScreen from './navigation/HomeScreen';
import PersonForm from './src/component/personForm';
import {StyleSheet, Text, View} from 'react-native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Add screens to the stack */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Users" component={UsersScreen} />
            {/* Add more screens as needed */}
          </Stack.Navigator>

          {/* Your existing components can still be rendered outside the navigator */}
          {/* <View style={styles.container}>
            <Text style={styles.title}>Add Persons</Text>
            <PersonForm />
          </View> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 10,
  },
});

export default App;
