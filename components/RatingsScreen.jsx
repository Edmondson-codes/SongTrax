import React, {useContext} from "react";
import { View, Text, Image } from "react-native";
import Ratings from "./Ratings"
import { ThemeContext  } from '../ThemeProvider';
import { Icon } from "@rneui/base";
import pin from "../assets/AppIcons/icon-pin-darkpurple.png"

const RatingScreen = () => {
    const rating = 3.3; 
    const { theme, styles } = useContext(ThemeContext);
    return (
        <View style={{ backgroundColor: theme.bgColor}}  >
            <View style={{...styles.flexSpread, marginBottom: 30}}>
                <Image 
                source={pin}
                style={styles.bigPin}
                />
                <Text style={styles.heading}>UQ Lakes</Text>
            </View>
            
            <Ratings name={"Song 1"} date={"21/10/2023"} rating={3.6} />
            <Ratings name={"Song 2"} date={"22/10/2023"} rating={4.6} />
            <Ratings name={"Song 3"} date={"23/10/2023"} rating={1.6} />
        
        </View>
    )
}

export default RatingScreen