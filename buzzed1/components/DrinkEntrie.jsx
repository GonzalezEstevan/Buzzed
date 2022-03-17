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

var DrinkEntrie = (props) => {

  var deleteDrinks =  (data) => {
      axios.put('http://localhost:3000/db/myDrinks', data)
        .then( async response => {
          console.log('Deleted')
        })
        .catch(err => {
          console.error(err.message, 'ERROR')
        })
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.drinkName}>
          <Text style={{ fontSize: 24 }}>
            {props.drinkObj.drinkname}
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
          }} source={{ uri: props.drinkObj.pic }} resizeMode="stretch" />
        </View>
        <SafeAreaView style={styles.textContainer}>
          <Text style={{ fontSize: 16 }}>
            {props.drinkObj.instructions}
          </Text>
          <Pressable style={styles.IconBehave} onPress={() =>
          {deleteDrinks({
            id: props.drinkObj.id,
            name: props.drinkObj.drinkName,
            pic: props.drinkObj.pic,
            instructions: props.drinkObj.instructions,
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
          <Text style={{fontSize: 20}}>
            {pressed ? 'Deleted!' : (
              <Icon name="round-delete-button" group="material-design" height={iconHeight} width={iconWidth} color={'black'} />
            )}
          </Text>
        )}
      </Pressable>
        </SafeAreaView>
      </View>
    </View>
  )
}
export default DrinkEntrie;