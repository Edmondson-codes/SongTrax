import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, ThemeContext  } from './ThemeProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RatingScreen from './components/RatingsScreen';
import MapScreen from "./components/MapScreen"
import ProfileScreen from "./components/ProfileScreen"
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './components/TabBar';
import {Dimensions} from 'react-native';

// TODO: get image picker and map code from contacts

// start by runing npm expo start   in 

// web view and button trigger music playback in web view


const Tab = createBottomTabNavigator();

export default function App() {
  // const { styles } = useContext(ThemeContext);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <ThemeProvider>
      <NavigationContainer  style={{flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
      
          <SafeAreaView style={styles.container} >
            <Tab.Navigator title={false} tabBar={props => <TabBar key={props} {...props} />}>
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Home" component={RatingScreen} />
              <Tab.Screen name="Edit Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </SafeAreaView>
        
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
