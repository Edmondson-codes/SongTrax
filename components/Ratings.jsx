import React, {useContext} from "react";
import { View, Text } from "react-native";
import { Rating } from '@rneui/themed';
import {Dimensions} from 'react-native';
import { ThemeContext  } from '../ThemeProvider';


const RatingScreen = ({rating, name, date}) => {
    // const rating = 3.3; 
    const { theme, toggleTheme, styles } = useContext(ThemeContext);
    const width = Dimensions.get('window').width;
    return (
        <View  style={{flexDirection: "row", 
                        justifyContent: 'space-evenly', 
                        alignItems: "center", width: width,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1}}  >
            <View style={{marginBottom: 50}}>
                <Text >{name}</Text>
                <Text >{date}</Text>
            </View>
            
            <Rating
                showRating={true}
                type="star"
                fractions={1}
                startingValue={rating}
                readonly={true}
                imageSize={5}
                // style={styles.ratingComponent}
            />
            <Text>          </Text>
        </View>
    )
}

export default RatingScreen