import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TimelineScreen from './TimelineScreen';
import Colors from 'diary/src/res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TimeLine" component={TimelineScreen} />
      {/* <Stack.Screen name="CoinsDetail" component={CoinsDetails} /> */}
    </Stack.Navigator>
  );
};

export default CoinsStack;
