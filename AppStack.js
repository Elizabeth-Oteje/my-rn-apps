import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          title:'Welcome Home',
          headerStyle:{
            backgroundColor:'orange',
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          headerRight:()=>(
           <Pressable onPress={()=>alert('Menu button pressed')}>
              <Text style={{color:'white', fontSize:16}}>Menu</Text>
           </Pressable>
          ),
          contentStyle:{
            backgroundColor:'lightblue',
          }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} initialParams={{name:'Guest'}}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// React Navigation provides diff navigators ; Stack, Tab, Drawer, etc.
//you can use either navigation prop or useNavigation hook to navigate through screens
//screen options prop is used to customize all screens in the navigator used on the stack.navigator while options prop is used to customize a single screen used on the stack.screen
