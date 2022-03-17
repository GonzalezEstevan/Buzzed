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
    width: 325,
    backgroundColor: 'white',
    fontSize: 17,
  },

});

var SearchDrinks = (props) => {
  const [search, setSearch] = useState('');
  const [arrayDrinks, setArrayDrinks] = useState([]);
  const [err, setErr] = useState(false);

  // useEffect(() => {
  //   searchApi()
  // }, [])

  var searchApi = async (ingredients) => {
    ingredients = ingredients.toString().toLowerCase();
    await axios.get(`http://thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredients}`)
      .then(response => {
        var drinkArr = response.data.drinks.slice(0, 10)
        setArrayDrinks(drinkArr)
      })
      //FIX ERROR HANDLEING
      .catch(err => {
        alert('Not an ingredient')
        setErr(true)
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
        {console.log('ERROR',err)}
      <TextInput
        style={styles.input2}
        placeholder="Search by Ingredients"
        onChangeText={(text) => updateSearch(text)}
        onSubmitEditing={(text) => (searchApi(search))}
      />
      </SafeAreaView>
      <SafeAreaView >
        <ScrollView style={{top:50}}>
        {arrayDrinks.map((drink, idx) => {
          console.log(drink)
          return <SearchedDrinks drinkObj={drink} key={idx}/>
        })}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
    </View>
  )
}
export default SearchDrinks;

