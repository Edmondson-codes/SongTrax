import { View, Text, TouchableOpacity, Button } from 'react-native';
import {Dimensions} from 'react-native';


export function BarButton({icon, title, navigateTo, navigation}){
    return (
    <Button
        style={{borderRadius: 20, margin: 20, color: '#555'}}
        title={title ? title: ""}
        // icon={icon ? icon : ""}
        onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate(navigateTo);
        }}
    />
    )
}

export default function TabBar({ state, descriptors, navigation }) {
    const width = Dimensions.get('window').width;
    return (
        <View  style={{flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center", width: width}}>
            <BarButton title={"   Map   "} navigateTo={"Map"} navigation={navigation}/>
            <BarButton title={"Ratings"} navigateTo={"Home"} navigation={navigation}/>
            <BarButton title={"Profile"} navigateTo={"Edit Profile"} navigation={navigation}/>
        </View>
    )
}

