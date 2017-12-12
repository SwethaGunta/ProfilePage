
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Timeline from './timeline';
import TabTwo from './tabTwo';

export const StackScreens = StackNavigator({
  timeline: { screen: Timeline},
  TabTwo: { screen: TabTwo },
},
{
  initialRouteName: 'timeline'
}
);
