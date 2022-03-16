// import React from 'react'
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Image, View, SafeAreaView } from 'react-native';
import axios from 'axios'
import DrinkList from './DrinkList'
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
  container: {
    flex: 1,
    backgroundColor: '#3962ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var Home = () => {
  var [drinks, setDrinks] = useState([])

  useEffect(() => {
    getInfo()
  }, []);

  var getInfo = () => {
    axios.get(`http://thecocktaildb.com/api/json/v2/9973533/popular.php`)
      .then(response => {
       var cutArray = response.data.drinks.slice(0, 10)
        // var newObj = {
        //   name: response.data.drinks[0].strDrink,
        //   pic: response.data.drinks[0].strDrinkThumb,
        // }
        setDrinks(cutArray)
      })
      .catch(err => {
         console.error(err.message)
      })
  }
  return (
//     <View>
//       <ScrollView>

//     <View style={styles.drinkName}>
//     <Text style={{fontSize: 24}}>
//       {drinks.name}
//     </Text>
//       </View>
//     <View>
//     <Image style={{

//       alignSelf: 'center',
//       height: 300,
//       width: 300,
//       borderWidth: 1,
//       borderRadius: 150,
//       margin: 10
// }} source={{uri: drinks.pic}} resizeMode="stretch"/>
//     </View>
//       </ScrollView>
//   </View>
    <SafeAreaView >
      <ScrollView >
        {drinks.map(drink => {
          return <DrinkList drink={drink}/>
        })}
      </ScrollView>
    </SafeAreaView>
  )

}
export default Home;