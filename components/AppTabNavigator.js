import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Image } from 'react-native'
import ExchangeScreen from '../screens/ExchangeScreen'
import HomeScreen from '../screens/HomeScreen'

export const AppTabNavigator=createBottomTabNavigator({
    'AddItem':{
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarLabel:'Donate Books'
        }
    },
    'ExchangeItem':{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:'Request Books'
        }
    }
})