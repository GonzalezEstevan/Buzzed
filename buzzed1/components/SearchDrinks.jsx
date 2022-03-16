import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Image, View, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';
import SearchedDrinks from './SearchedDrinks'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    backgroundColor: 'white',
    fontSize: 17
  },
  input2: {
    position: 'absolute',
    alignItems: 'center',
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    width: 300,
    bottom: 2,
    backgroundColor: 'white',
    fontSize: 17
  },
});

var SearchDrinks = (props) => {
  const [search, setSearch] = useState('');
  const [arrayDrinks, setArrayDrinks] = useState([]);

  // useEffect( async () => {
  //    await searchApi(search)
  // }, [search])

  var searchApi = async (ingredients) => {
    ingredients = ingredients.toString().toLowerCase();
    await axios.get(`http://thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredients}`)
      .then(response => {
        var drinkArr = response.data.drinks.slice(0, 5)
        setArrayDrinks(drinkArr)
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  var updateSearch = (text) => {
    setSearch(text)
    console.log('TEXT', text)
  }
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input2}
        placeholder="Search by Ingredients"
        onChangeText={(text) => updateSearch(text)}
        onSubmitEditing={(text) => (searchApi(search))}
      />
      </SafeAreaView>
      <SafeAreaView>
        <ScrollView >
        {arrayDrinks.map(drink => {
          return <SearchedDrinks drinkObj={drink}/>
        })}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
    </View>
  )
}
export default SearchDrinks;

