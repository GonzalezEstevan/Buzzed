import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Image, View, SafeAreaView, Button } from 'react-native';
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
    elevation: 10,
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
  },
  scrollContainer2: {
    paddingBottom: 200,
    top:200,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  }
});



var SearchedDrinks = (props) => {
 var [isPressed, setIsPressed] = useState(false)
 var [drinkId, setDrinkId] = useState('')
 var [clickedDrink, setClickedDrink] = useState({})

 useEffect(() => {
    if (drinkId === '') {
      console.log('No Drink Id Yet')
    } else {
      getById(drinkId)
    }
 }, [drinkId])


  var getById = (drinkId) => {
    axios.get(`http://thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drinkId}`)
      .then(response => {
        var count = 1
        var instructions = response.data.drinks[0].strInstructions
        var clickedObj = {
          instructions: instructions,
          pic: response.data.drinks[0].strDrinkThumb,
          name: response.data.drinks[0].strDrink
        }
        setClickedDrink(clickedObj)
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  if (isPressed === false) {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
        <Pressable onPress={() => {setIsPressed(!isPressed), setDrinkId(props.drinkObj.idDrink)}}>
        <View style={styles.drinkName}>
        <Text style={{fontSize: 24}}>
          {props.drinkObj.strDrink}
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
    }} source={{uri: props.drinkObj.strDrinkThumb}} resizeMode="stretch"/>
        </View>
        <SafeAreaView style={styles.textContainer}>
        </SafeAreaView>
        </Pressable>
        </View>
      </View>
    )
  } else {
    return(
      <View style={styles.container}>
      <View style={styles.cardContainer}>
      <Pressable onPress={() => {setIsPressed(!isPressed), setDrinkId(props.drinkObj.idDrink)}}>
      <View style={styles.drinkName}>
      <Text style={{fontSize: 24}} >
        {props.drinkObj.strDrink}
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
  }} source={{uri: props.drinkObj.strDrinkThumb}} resizeMode="stretch"/>
      </View>
      <SafeAreaView style={styles.textContainer}>
      </SafeAreaView>
      <SafeAreaView style={styles.textContainer}>
      <Text style={{fontSize: 16}}>
        {clickedDrink.instructions}
      </Text>
      </SafeAreaView>
      </Pressable>
      </View>
    </View>
    )
  }

}
export default SearchedDrinks;