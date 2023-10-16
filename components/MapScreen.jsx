import React, {useContext} from "react";
import { View, Text } from "react-native";
import MapView, {Circle} from 'react-native-maps';
import {width, height} from "./dimensions"
import { ThemeContext  } from '../ThemeProvider';
// import Geolocation from '@react-native-community/geolocation';

// let location = null;

// Geolocation.getCurrentPosition(info => console.log(info));

const uqLakesCoords = {
    latitude: -27.5005,
    longitude: 153.0149,
}

const greatCourtCoords = {
    latitude: -27.4975,
    longitude: 153.0131,
}

const MapScreen = () => {
    const { theme, toggleTheme, styles } = useContext(ThemeContext);
    
    return (
        <View>
            <MapView
            style={{ height: height, width: '100%' }}
            initialRegion={{
                ...greatCourtCoords,
                latitudeDelta: 0.0461,
                longitudeDelta: 0.0210,
              }}
              mapSize = {1}
            >
                <Circle strokeWidth={4} fillColor={theme.colorTranslucent} center={uqLakesCoords} radius = {100} />
                <Circle strokeWidth={4} fillColor={theme.colorTranslucent} center={greatCourtCoords} radius = {100} />
            </MapView>
        </View>
    )
}

export default MapScreen