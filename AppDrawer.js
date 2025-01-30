import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} options={
                {title:'My Dashboard',
                drawerLabel:'Dashboard Label',
                drawerActiveTintColor:'red',
                drawerActiveBackgroundColor:'lightblue',
                drawerContentStyle:{
                    backgroundColor:'lightyellow',
                }
                }
            } />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}