import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { ViewOverflow, TouchableWithoutFeedback, View } from "react-native";

import MyStory from '../screens/MyStory'
import PeopleStory from '../screens/PeopleStory'
import People from '../screens/People'
import Profile from '../screens/Profile'

import EditStory from '../components/EditStory';

import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';

const createStack = (Screen, icon) => createStackNavigator(
  {
    [Screen]: Screen,
  }, {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          size={25}
          name={icon}
          tabIconSelected={Colors.tabIconSelected}
          tabIconDefault={Colors.tabIconDefault}
        />
      ),
    }
  }
);

const MyStoryStack = createStackNavigator(
  {
    Story: MyStory,
    EditStory: EditStory,
  }, {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          size={25}
          name='edit'
          tabIconSelected={Colors.tabIconSelected}
          tabIconDefault={Colors.tabIconDefault}
        />
      ),
    }
  }
);

const PeopleStoryStack = createStack(PeopleStory, 'book');

const PeopleStack = createStack(People, 'hearto');

const ProfileStack = createStack(Profile, 'contacts');

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Story: MyStoryStack,
    Timeline: PeopleStoryStack,
    Add: {
      screen: () => null,
    },
    People: PeopleStack,
    Profile: ProfileStack,
  }, {
    initialRouteName: 'Story',
    barStyle: { backgroundColor: Colors.tabBar },
    labeled: false,
  }
);

export default createAppContainer(
  BottomTabNavigator
);