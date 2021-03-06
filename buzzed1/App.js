import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-ico';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.jsx';
import axios from 'axios';
import SearchDrinks from './components/SearchDrinks.jsx'
import MyDrinks from './components/MyDrinks.jsx'
var iconHeight = 40;
var iconWidth = 40;



export default function App() {
  var [screenText, setScreenText] = useState('Home');

  const changeText = (text) => {
    setScreenText(text)
  }
  if(screenText === 'Home'){
    return (
      <View style={styles.container}>
        <Image source={require('./assets/buzzed-logos/buzzed-logos_transparent.png')} style={styles.logo}/>
          <View style={styles.scrollContainer}>
           <HomeScreen />
           <StatusBar style="light" />
          </View>
        <View>
          <StatusBar style="light" />
        </View>
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable onPress={() => changeText('MyDrinks')} style={styles.IconBehave}>
              <Icon name="margarita-glass-drink" group="lodgicons" height={iconHeight} width={iconWidth} color={'white'}/>
            </Pressable>
            <Pressable onPress={() => changeText('Home')} style={styles.IconBehave}>
              <Icon name="home" group="font-awesome"  height={iconHeight} width={iconWidth} color={'white'}/>
            </Pressable>
            <Pressable onPress={() => changeText('Search')} style={styles.IconBehave}>
              <Icon name="search" group="miscellaneous"  height={iconHeight} width={iconWidth} color={'white'}/>
            </Pressable>
          </View>
        </View>
      </View>
    )
  } else if (screenText === 'Search') {
    return(
    <View style={styles.container}>
    <Image source={require('./assets/buzzed-logos/buzzed-logos_transparent.png')} style={styles.logo}/>
    <View style={styles.scrollContainer2}>
      <SearchDrinks />
      <StatusBar style="light" />
    </View>
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable onPress={() => changeText('MyDrinks')} style={styles.IconBehave}>
          <Icon name="margarita-glass-drink" group="lodgicons" height={iconHeight} width={iconWidth} color={'white'}/>
        </Pressable>
        <Pressable onPress={() => changeText('Home')} style={styles.IconBehave}>
          <Icon name="home" group="font-awesome"  height={iconHeight} width={iconWidth} color={'white'}/>
        </Pressable>
        <Pressable onPress={() => changeText('Search')} style={styles.IconBehave}>
          <Icon name="search" group="miscellaneous"  height={iconHeight} width={iconWidth} color={'white'}/>
        </Pressable>
      </View>
    </View>
  </View>
    )
  } else if (screenText === 'MyDrinks') {
    return (
    <View style={styles.container}>
    <Image source={require('./assets/buzzed-logos/buzzed-logos_transparent.png')} style={styles.logo}/>
    <View styles={styles.scrollContainer2}>
      <MyDrinks />
      <StatusBar style="light" />
    </View>
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable onPress={() => changeText('MyDrinks')} style={styles.IconBehave}>
          <Icon name="margarita-glass-drink" group="lodgicons" height={iconHeight} width={iconWidth} color={'white'}/>
        </Pressable>
        <Pressable onPress={() => changeText('Home')} style={styles.IconBehave}>
          <Icon name="home" group="font-awesome"  height={iconHeight} width={iconWidth} color={'white'}/>
        </Pressable>
        <Pressable onPress={() => changeText('Search')} style={styles.IconBehave}>
          <Icon name="search" group="miscellaneous"  height={iconHeight} width={iconWidth} color={'white'}/>
        </Pressable>
      </View>
    </View>
  </View>
    )
  }

}
const deviceWidth = Math.round(Dimensions.get('window')).width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414a4c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#414a4c',
    width: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 20,

  },
  IconBehave: {
    padding: 14
  },
  logo: {
    bottom: 650,
    width: '100%',
    height: 220,
    margin: 0,
    position: 'absolute',
  },
  cardContainer: {
    width: '80%',
    backgroundColor: '#EEF5DB',
    bottom: 100,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  scrollContainer: {
    paddingBottom: 225,
    top:150,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  scrollContainer2: {
    paddingBottom: 280,
    top:150,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  }


});