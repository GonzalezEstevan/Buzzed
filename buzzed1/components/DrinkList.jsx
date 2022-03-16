import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Image, View, SafeAreaView, Button, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios'
import Icon from 'react-native-ico';

var iconHeight = 40;
var iconWidth = 40;

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

var DrinksList = (props) => {
  var [drinks, setDrinks] = useState([])

  var postDrink = (body) => {
     axios.post('http://localhost:3000/db/myDrinks', body)
      .then(response => {
        console.log('POSTED TO DB')
      })
      .catch(err => {
        console.error(err,'ERROR')
      })
  }


  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.drinkName}>
          <Text style={{ fontSize: 24 }}>
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
          }} source={{ uri: props.drink.strDrinkThumb }} resizeMode="stretch" />
        </View>
        <SafeAreaView style={styles.textContainer}>
          <Text style={{ fontSize: 16 }}>
            {props.drink.strInstructions}
          </Text>
          <Pressable style={styles.IconBehave} onPress={() =>
          {postDrink({
            id: props.drink.idDrink,
            name: props.drink.strDrink,
            pic: props.drink.strDrinkThumb,
            instructions: props.drink.strInstructions,
          }
          )}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.wrapperCustom
          ]}>
            {({ pressed }) => (
              <Text style={{ fontSize: 20 }}>
                {pressed ? 'Added!' : (
                  <Icon name="add" group="basic" height={iconHeight} width={iconWidth} color={'black'} />
                )}
              </Text>
            )}
          </Pressable>
        </SafeAreaView>
      </View>
    </View>
  )

}
export default DrinksList;