import React, { useState, useContext } from 'react';
import { lightTheme, darkTheme, colors } from './styles';
import {Dimensions, Appearance} from 'react-native';


export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme); // default to light theme

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  // set default theme
  const deviceTheme = Appearance.getColorScheme(); 

  if (deviceTheme === 'dark') {
    toggleTheme()
  }

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const styles = {
    nearbyAndPlayContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: theme.bgColor,
        width: width
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: theme.fgColor,
        paddingBottom: 0
    },
    subHeading: {
        fontSize: 14,
        color: theme.fgColor,
        paddingBottom: 25
    },
    songName: {
        fontSize: 20,
        fontWeight: "bold",
        color: theme.fgColor,
        paddingBottom: 0
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center", 
    },
    bigPin: {
        width: 45,
        height: 80,
    },
    flexSpread: {
        flexDirection: "row", 
        justifyContent: 'space-evenly', 
        alignItems: "center", 
        width: width
    },
    locationHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: theme.fgColor,
        paddingBottom: 6
    },
    playButton: {
        backgroundColor: theme.fgColor,
        color: theme.bgColor,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
    },
    locationIcon: {
        width: 35,
        height: 105,
    },
    currentLocation: {
        marginBottom: 10
    }, 
    ratingComponent: {
        paddingTop: 15,
    },
    profileContainer: {
        padding: 20,
        backgroundColor: theme.bgColor,
        flex: 1
    },
    input: {
        marginTop: 20,
        backgroundColor: theme.fgColorLighter,
        color: theme.fgColor,
        borderRadius: 5,
        textAlign: "center",
        height: 40
    },
    photoEmptyView: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: theme.fgColorLighter,
        borderStyle: "dashed",
        height: height / 1.625
    },
    photoFullImage: {
        height: "100%",
        width: "100%",
        borderRadius: 10
    },
    addPhoto: {
        backgroundColor: theme.fgColor,
        color: theme.bgColor,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        width: "50%",
        marginLeft: "25%",
        marginTop: -(height / 3.25)
    },
    changePhoto: {
        backgroundColor: theme.fgColor,
        color: theme.bgColor,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        width: "50%",
        marginLeft: "25%",
        marginTop: -(height / 12)
    }
}

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, styles }}>
      {children}
    </ThemeContext.Provider>
  );
};
