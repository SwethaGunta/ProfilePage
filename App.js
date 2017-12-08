import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import timeline from './timeline';
import TabTwo from './tabTwo';

const App = StackNavigator({
  timeline: { screen: timeline },
  TabTwo: { screen: TabTwo },
},
{
  headerMode: 'screen',
  initialRouteName: 'timeline',
  mode: 'card'
}
);
export default App;