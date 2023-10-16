import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './ThemeProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RatingScreen from './components/RatingsScreen';
import MapScreen from "./components/MapScreen"
import ProfileScreen from "./components/ProfileScreen"
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './components/TabBar';

// TODO: get image picker and map code from contacts

// start by runing npm expo start   in 

// web view and button trigger music playback in web view


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
      
          <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app! Yay! </Text>
            <StatusBar style="auto" />
            <Tab.Navigator tabBar={props => <TabBar key={props.name} {...props} />}>
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Home" component={RatingScreen} />
              <Tab.Screen name="Settings" component={ProfileScreen} />
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
