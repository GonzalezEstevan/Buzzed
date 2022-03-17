import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Image, View, SafeAreaView } from 'react-native';
import axios from 'axios';
import DrinkEntrie from './DrinkEntrie'

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
    top: 150,
    width:'100%',
    paddingBottom: 250
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  IconBehave: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
    padding: 6,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    alignItems: 'center'
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

var MyDrinks = () => {
 var [myDrinks, setMyDrinks] = useState([])

 useEffect(() => {
  getDrinks();
},[]);

var getDrinks = () => {
  axios.get(`http://localhost:3000/db/myDrinks`)
    .then(response => {
      setMyDrinks(response.data.rows)
    })
    .catch(err => {
       console.error(err.message)
    })
}


  return(
    <View style={styles.container}>
      <Text style={{fontSize: 32, color: 'white', alignItems: 'center', justifyContent: 'center'}}>My Drinks</Text>
      <SafeAreaView>
        <ScrollView >
        {myDrinks.map((drink, idx) => {
          console.log(drink)
           return <DrinkEntrie drinkObj={drink} key={idx}/>
        })}
        </ScrollView>
      </SafeAreaView>

    </View>
  )
}
export default MyDrinks;