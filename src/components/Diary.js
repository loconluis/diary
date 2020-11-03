import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimelineStack from './src/components/Timeline/TimelineStack';

// Create the Tab navigator
const Tabs = createBottomTabNavigator();

const Diary = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={'Timeline'} component={TimelineStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Diary;
