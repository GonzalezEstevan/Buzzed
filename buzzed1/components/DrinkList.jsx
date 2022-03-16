import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Image, View, SafeAreaView } from 'react-native';
import axios from 'axios'

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  drinkName: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: 10
  },
  cardContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#C8E7F5',
    borderRadius: 10,
    shadowColor: "#000",
    marginTop: 5,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  }
});

var DrinksList = (props) => {
  var [drinks, setDrinks] = useState([])

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
      <View style={styles.drinkName}>
      <Text style={{fontSize: 24}}>
        {props.drink.strDrink}
      </Text>
        </View>
      <View>
      <Image style={{

        alignSelf: 'center',
        height: 300,
        width: 300,
        borderWidth: 1,
        borderRadius: 150,
        margin: 10
  }} source={{uri: props.drink.strDrinkThumb}} resizeMode="stretch"/>
      </View>
      <SafeAreaView style={styles.textContainer}>
      <Text style={{fontSize: 16}}>
        {props.drink.strInstructions}
      </Text>
      </SafeAreaView>
      </View>
    </View>
  )

}
export default DrinksList;