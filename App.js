import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FunctionProvider from './data/context';
import HomeScreen from './screens/home';
import CategoryWiseTasks from './screens/categoryWiseTasks';
import AddNewTask from './screens/addNewTask';
import Tasks from './screens/tasks';
import TodaysTasks from './screens/todaysTasks';
import AddCategory from './screens/addCategory';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <FunctionProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='CategoryWiseTasks' component={CategoryWiseTasks} />
          <Stack.Screen name='AddNewTask' component={AddNewTask} />
          <Stack.Screen name='Tasks' component={Tasks} />
          <Stack.Screen name='TodaysTasks' component={TodaysTasks} />
          <Stack.Screen name='AddCategory' component={AddCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    </FunctionProvider>
  );
}

