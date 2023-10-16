import { View, Text, TouchableOpacity, Button } from 'react-native';

// export function butto

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style = {{flexDirection:"row"}}>
    <Button
      title="Map"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Map');
      }}
    />
    <Button
      title="Home"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Home');
      }}
    />
    <Button
      title="Profile"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Settings');
      }}
    />
    </View>
  )
}

